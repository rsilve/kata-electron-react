import { AlarmList, DEFAULT_ALARMS_LIST } from '../../../shared'

export function getAlarms(): AlarmList {
  return DEFAULT_ALARMS_LIST
}

export function saveAlarms(alarms: AlarmList): void {
  window.api.action({ type: 'updateAlarm', payload: alarms })
}
