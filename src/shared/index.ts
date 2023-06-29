export type Alarm = {
  time: string
  enabled: boolean
}

export type AlarmList = [Alarm, Alarm]

export const DEFAULT_ALARMS_LIST: AlarmList = [
  { time: '00:00', enabled: false },
  { time: '00:00', enabled: false }
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

export type Frame = TimeFrame | AlarmsFrame

export function isTimeFrame(frame: Frame): frame is TimeFrame {
  return frame.type === 'TimeFrame'
}

export function isAlarmFrame(frame: Frame): frame is AlarmsFrame {
  return frame.type === 'AlarmsFrame'
}
