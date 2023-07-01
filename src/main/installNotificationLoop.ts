import { BrowserWindow } from 'electron'
import dayjs, { Dayjs } from 'dayjs'
import { FRAME_CHANNEL } from '../preload/channels'
import { Frame } from '../shared'
import { getAlarmList } from './services/alarmsService'
import { filter, from, Observable, skipUntil, throttleTime, timer } from 'rxjs'

export function installNotificationLoop(
  eventLoop: Observable<Dayjs>,
  mainWindow: BrowserWindow
): void {
  const now = dayjs()
  const next = now.add(1, 'minute').second(0).millisecond(0)

  console.log('Notification loop:', next.toISOString())
  from(eventLoop)
    .pipe(
      skipUntil(timer(next.toDate())),
      throttleTime(60 * 1000),
      filter(() => {
        const time = dayjs().format('HH:mm')
        return getAlarmList().some((alarm) => alarm.enabled && time === alarm.time)
      })
    )
    .subscribe(() => {
      mainWindow.webContents.send(FRAME_CHANNEL, { type: 'NotificationFrame' } as Frame)
    })
}
