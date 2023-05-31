import { BrowserWindow } from 'electron'
import { Frame } from '../preload/Frame'

type Listener = (value: string) => void
export type Timer = {
  addEventListener: (listener: Listener) => void
}

class SimpleTimer implements Timer {
  listeners: Listener[] = []

  addEventListener(listener: Listener): void {
    this.listeners.push(listener)
  }

  execute(value: string): void {
    this.listeners.forEach((listener) => listener(value))
  }
}

export const timer = (mainWindow: BrowserWindow): Timer => {
  const instance = new SimpleTimer()
  setInterval(() => {
    const now = new Date().toISOString()
    mainWindow.webContents.send('timestamp-tick', { time: now } as Frame)
    instance.execute(now)
  }, 300)
  return instance
}
