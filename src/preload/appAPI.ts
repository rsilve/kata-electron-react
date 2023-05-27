import { electronAPI } from '@electron-toolkit/preload'

export type AppAPI = { listen: (setter: (value: string) => void) => void }

export const api: AppAPI = {
  listen: (setter: (value: string) => void) => {
    electronAPI.ipcRenderer.removeAllListeners('timestamp-tick')
    electronAPI.ipcRenderer.on('timestamp-tick', (_: unknown, arg: unknown) => {
      setter(arg as string)
    })
  }
}
