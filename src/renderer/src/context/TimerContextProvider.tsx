import { createSignal } from '@react-rxjs/utils'
import { bind } from '@react-rxjs/core'
import React from 'react'
import {
  AlarmsFrame,
  DEFAULT_ALARMS_LIST,
  Frame,
  isAlarmFrame,
  isNotificationFrame,
  isTimeFrame,
  NotificationFrame,
  TimeFrame
} from '../../../shared'
import { filter, from } from 'rxjs'

const [frame, setFrameValue] = createSignal<Frame>()

const timeFrame = from(frame).pipe(filter(isTimeFrame))
const alarmFrame = from(frame).pipe(filter(isAlarmFrame))
const notificationFrame = from(frame).pipe(filter(isNotificationFrame))

export const [useTime] = bind<TimeFrame>(timeFrame, {
  type: 'TimeFrame',
  time: new Date().toISOString()
})

export const [useAlarms] = bind<AlarmsFrame>(alarmFrame, {
  type: 'AlarmsFrame',
  alarms: DEFAULT_ALARMS_LIST
})

export const [useNotification] = bind<NotificationFrame>(
  notificationFrame,
  undefined as unknown as NotificationFrame
)

export const TimerContextProvider = ({ children }: { children }): React.ReactElement => {
  window.api.listen(setFrameValue)
  return <>{children}</>
}
