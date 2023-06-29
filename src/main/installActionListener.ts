import { ACTION_CHANNEL, FRAME_CHANNEL } from '../preload/channels'
import * as electron from 'electron'
import { BrowserWindow } from 'electron'
import { getAlarmList, updateAlarm } from './services/alarmsService'
import { Action, AlarmList, Frame } from '../shared'

export const installActionListener = (mainWindow: BrowserWindow): void => {
  electron.ipcMain.on(ACTION_CHANNEL, (_, arg: unknown) => {
    const { type, payload } = arg as Action
    if (type === 'updateAlarm') {
      updateAlarm(payload as AlarmList)
      mainWindow.webContents.send(FRAME_CHANNEL, {
        type: 'AlarmsFrame',
        alarms: getAlarmList()
      } as Frame)
    }
  })
}
