import { BrowserWindow } from 'electron'
import dayjs, { Dayjs } from 'dayjs'
import { FRAME_CHANNEL } from '../preload/channels'
import { Frame } from '../shared'
import { audit, from, interval, map, Observable, skipUntil, timer } from 'rxjs'

export const installTimerLoop = (eventLoop: Observable<Dayjs>, mainWindow: BrowserWindow): void => {
  const now = dayjs()
  const next = now.add(1, 'second').millisecond(0)
  console.log('Timer loop:', next.toISOString())
  from(eventLoop)
    .pipe(
      skipUntil(timer(next.toDate())),
      audit(() => interval(1000)),
      map((value): Frame => ({ type: 'TimeFrame', time: value.toISOString() }))
    )
    .subscribe((frame) => {
      mainWindow.webContents.send(FRAME_CHANNEL, frame)
    })
}
