import { ACTION_CHANNEL } from '../preload/channels'
import * as electron from 'electron'
import { updateAlarm } from './services/alarmsService'
import { Action, AlarmList } from '../shared'

export const installActionListener = (): void => {
  electron.ipcMain.on(ACTION_CHANNEL, (_, arg: unknown) => {
    const { type, payload } = arg as Action
    console.log(type, payload)
    if (type === 'updateAlarm') {
      updateAlarm(payload as AlarmList)
    }
  })
}
