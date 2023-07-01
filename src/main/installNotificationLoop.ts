import { BrowserWindow } from 'electron'
import dayjs from 'dayjs'
import { FRAME_CHANNEL } from '../preload/channels'
import { Frame, TimeFrame } from '../shared'
import { getAlarmList } from './services/alarmsService'
import { distinct, filter, from, Observable } from 'rxjs'

export function installNotificationLoop(
  eventLoop: Observable<TimeFrame>,
  mainWindow: BrowserWindow
): void {
  from(eventLoop)
    .pipe(
      distinct((value) => dayjs(value.time).minute()),
      filter((frame) => {
        const time = dayjs(frame.time).format('HH:mm')
        return getAlarmList().some((alarm) => alarm.enabled && time === alarm.time)
      })
    )
    .subscribe(() => {
      mainWindow.webContents.send(FRAME_CHANNEL, { type: 'NotificationFrame' } as Frame)
    })
}
