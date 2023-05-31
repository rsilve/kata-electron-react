import { ElectronAPI } from "@electron-toolkit/preload";
import { AppAPI } from "./index";
import {Frame as FrameType} from './Frame';

declare global {
  interface Window {
    electron: ElectronAPI;
    api: AppAPI;
  }

  type Frame = FrameType
}

