import { BrowserWindow } from 'electron'
import { Frame } from '../preload/frame'
import dayjs from 'dayjs'
import { TIMESTAMP_CHANNEL } from '../preload/channels'

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
    const timeOfTheDay = now.format('A')
    mainWindow.webContents.send(TIMESTAMP_CHANNEL, { time, timeOfTheDay } as Frame)
    instance.execute(time)
  }, 300)
  return instance
}
