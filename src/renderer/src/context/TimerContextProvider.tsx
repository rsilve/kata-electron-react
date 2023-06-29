import { createSignal } from '@react-rxjs/utils'
import { bind } from '@react-rxjs/core'
import React from 'react'
import { AlarmsFrame, Frame, TimeFrame } from '../../../shared'
import { filter, map } from 'rxjs'

const [frame, setFrameValue] = createSignal<Frame>()
const [, frame$] = bind<Frame>(frame, { type: 'TimeFrame', time: new Date().toISOString() })

export const [useTime] = bind(
  frame$.pipe(
    filter((value) => value.type === 'TimeFrame'),
    map((value) => value as TimeFrame)
  )
)

export const [useAlarms] = bind(
  frame$.pipe(
    filter((value) => value.type === 'AlarmsFrame'),
    map((value) => value as AlarmsFrame)
  )
)

export const TimerContextProvider = ({ children }: { children }): React.ReactElement => {
  window.api.listen(setFrameValue)
  return <>{children}</>
}
