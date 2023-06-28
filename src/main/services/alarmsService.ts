import { Alarm } from '../../preload/models'

const alarms: Alarm[] = []

export const updateAlarm = (alarm: Alarm): void => {
  if (alarms.filter((a) => a.time === alarm.time).length > 0) {
    return
  } else {
    alarms.push(alarm)
  }
  console.log(alarms)
}
