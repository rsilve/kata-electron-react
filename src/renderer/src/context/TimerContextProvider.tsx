import { createSignal } from '@react-rxjs/utils'
import { bind } from '@react-rxjs/core'
import React from 'react'

const [timer, setTimerValue] = createSignal<Frame>()
const [useTimer] = bind(timer, { time: new Date().toISOString() })

export const useTimerContext = (): Frame => {
  return useTimer()
}

export const TimerContextProvider = ({ children }: { children }): React.ReactElement => {
  window.api.listen(setTimerValue)
  return <>{children}</>
}
