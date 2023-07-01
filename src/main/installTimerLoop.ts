import { BrowserWindow } from 'electron'
import { Dayjs } from 'dayjs'
import { FRAME_CHANNEL } from '../preload/channels'
import { TimeFrame } from '../shared'
import { from, map, Observable } from 'rxjs'

export const installTimerLoop = (
  eventLoop: Observable<Dayjs>,
  mainWindow: BrowserWindow
): Observable<TimeFrame> => {
  const loop = from(eventLoop).pipe(
    map((value): TimeFrame => ({ type: 'TimeFrame', time: value.toISOString() }))
  )

  loop.subscribe((frame) => {
    mainWindow.webContents.send(FRAME_CHANNEL, frame)
  })

  return loop
}
