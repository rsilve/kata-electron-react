import { electronAPI } from '@electron-toolkit/preload'
import { Action, Frame } from './models'
import { TIMESTAMP_CHANNEL } from './channels'

export type AppAPI = {
  listen: (setter: (value: Frame) => void) => void
  action: (alarm: Action) => void
}

export const api: AppAPI = {
  listen: (setter: (value: Frame) => void) => {
    electronAPI.ipcRenderer.removeAllListeners(TIMESTAMP_CHANNEL)
    electronAPI.ipcRenderer.on(TIMESTAMP_CHANNEL, (_: unknown, arg: unknown) => {
      setter(arg as Frame)
    })
  },
  action: (action: Action) => {
    electronAPI.ipcRenderer.send('action', action)
  }
}
