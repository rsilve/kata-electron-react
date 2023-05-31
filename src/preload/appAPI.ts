import { electronAPI } from '@electron-toolkit/preload'
import { Frame } from './Frame'

export type AppAPI = { listen: (setter: (value: Frame) => void) => void }

export const api: AppAPI = {
  listen: (setter: (value: Frame) => void) => {
    electronAPI.ipcRenderer.removeAllListeners('timestamp-tick')
    electronAPI.ipcRenderer.on('timestamp-tick', (_: unknown, arg: unknown) => {
      setter(arg as Frame)
    })
  }
}
