export type Alarm = {
  time: string
  enabled: boolean
}

export type AlarmList = [Alarm, Alarm]

export const DEFAULT_ALARMS_LIST: AlarmList = [
  { time: '--:--', enabled: false },
  { time: '--:--', enabled: false }
]

export type Action = {
  type: 'updateAlarm'
  payload: unknown
}

export type TimeFrame = {
  type: 'TimeFrame'
  time: string
}

export type AlarmsFrame = {
  type: 'AlarmsFrame'
  alarms: AlarmList
}
export type NotificationFrame = {
  type: 'NotificationFrame'
}

export type Frame = TimeFrame | AlarmsFrame | NotificationFrame

export function isTimeFrame(frame: Frame): frame is TimeFrame {
  return frame.type === 'TimeFrame'
}

export function isAlarmFrame(frame: Frame): frame is AlarmsFrame {
  return frame.type === 'AlarmsFrame'
}

export function isNotificationFrame(frame: Frame): frame is NotificationFrame {
  return frame.type === 'NotificationFrame'
}
