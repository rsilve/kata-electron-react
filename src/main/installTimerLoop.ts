import { BrowserWindow } from 'electron'
import dayjs from 'dayjs'
import { FRAME_CHANNEL } from '../preload/channels'
import { Frame } from '../shared'

type Listener = (value: string) => void
export type InstallTimerLoop = {
  addEventListener: (listener: Listener) => void
}

class SimpleTimer implements InstallTimerLoop {
  listeners: Listener[] = []

  addEventListener(listener: Listener): void {
    this.listeners.push(listener)
  }

  execute(value: string): void {
    this.listeners.forEach((listener) => listener(value))
  }
}

export const installTimerLoop = (mainWindow: BrowserWindow): InstallTimerLoop => {
  const instance = new SimpleTimer()
  setInterval(() => {
    const now = dayjs()
    const time = now.toISOString()
    mainWindow.webContents.send(FRAME_CHANNEL, { type: 'TimeFrame', time } as Frame)
    instance.execute(time)
  }, 1000)
  return instance
}
