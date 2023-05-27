import { BrowserWindow } from 'electron'

export const timer = (mainWindow: BrowserWindow): void => {
  setInterval(() => {
    mainWindow.webContents.send('timestamp-tick', new Date().toISOString())
  }, 1000)
}
