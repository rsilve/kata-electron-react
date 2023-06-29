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

export type Frame = {
  time: string
  timeOfTheDay: string
}
