export type Alarm = {
  time: string
  enabled: boolean
}

export type AlarmList = [Alarm, Alarm]

export function getAlarms(): AlarmList {
  return [
    { time: '00:00', enabled: false },
    { time: '00:00', enabled: false }
  ]
}
