import { createSignal } from '@react-rxjs/utils'
import { bind } from '@react-rxjs/core'
import React from 'react'
import { Frame } from '../../../shared'

const [timer, setTimerValue] = createSignal<Frame>()
const [useTimer] = bind<Frame>(timer, { time: new Date().toISOString(), timeOfTheDay: '' })

export const useTimerContext = (): Frame => {
  return useTimer()
}

export const TimerContextProvider = ({ children }: { children }): React.ReactElement => {
  window.api.listen(setTimerValue)
  return <>{children}</>
}
