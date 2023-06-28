import { ElectronAPI } from '@electron-toolkit/preload'
import { Action as ActionAPI, Alarm as AlarmAPI, Frame as FrameAPI } from './Frame'
import { AppAPI } from './appAPI'

declare global {
  interface Window {
    electron: ElectronAPI
    api: AppAPI
  }

  type Frame = FrameAPI
  type Action = ActionAPI
  type Alarm = AlarmAPI
}
