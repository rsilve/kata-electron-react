export type Action = {
  type: 'updateAlarm'
  payload: unknown
}

export type Alarm = {
  time: string
}

export type Frame = {
  time: string
  timeOfTheDay: string
  alarms?: Alarm[]
}
