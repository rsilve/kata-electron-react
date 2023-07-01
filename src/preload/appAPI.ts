import { electronAPI } from '@electron-toolkit/preload'
import { ACTION_CHANNEL, FRAME_CHANNEL } from './channels'
import { Action, Frame } from '../shared'

export type AppAPI = {
  listen: (setter: (value: Frame) => void) => void
  action: (alarm: Action) => void
}

export const api: AppAPI = {
  listen: (setter: (value: Frame) => void) => {
    electronAPI.ipcRenderer.removeAllListeners(FRAME_CHANNEL)
    electronAPI.ipcRenderer.on(FRAME_CHANNEL, (_: unknown, arg: unknown) => {
      setter(arg as Frame)
    })
  },
  action: (action: Action) => {
    electronAPI.ipcRenderer.send(ACTION_CHANNEL, action)
  }
}
