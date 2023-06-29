import { FRAME_CHANNEL } from '../preload/channels'
import { Frame } from '../shared'
import { getAlarmList } from './services/alarmsService'
import { BrowserWindow } from 'electron'

export const initializeChannels = (mainWindow: BrowserWindow): void => {
  mainWindow.webContents.send(FRAME_CHANNEL, {
    type: 'AlarmsFrame',
    alarms: getAlarmList()
  } as Frame)
}
