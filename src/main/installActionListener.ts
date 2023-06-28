import { ACTION_CHANNEL } from '../preload/channels'
import { Action, Alarm } from '../preload/models'
import * as electron from 'electron'
import { updateAlarm } from './services/alarmsService'

export const installActionListener = (): void => {
  electron.ipcMain.on(ACTION_CHANNEL, (_, arg: unknown) => {
    const { type, payload } = arg as Action
    if (type === 'updateAlarm') {
      updateAlarm(payload as Alarm)
    }
  })
}
