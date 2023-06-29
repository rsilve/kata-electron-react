import { AlarmList, DEFAULT_ALARMS_LIST } from '../../shared'

let alarms: AlarmList = DEFAULT_ALARMS_LIST

export const updateAlarm = (alarmList: AlarmList): void => {
  alarms = alarmList
}

export function getAlarmList(): AlarmList {
  return [...alarms]
}
