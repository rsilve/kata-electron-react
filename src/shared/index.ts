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

export function isTimeFrame(frame: Frame): TimeFrame {
  if (frame.type === 'TimeFrame') {
    return frame
  }
  throw new Error('Guard rejection')
}
