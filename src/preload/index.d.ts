import { ElectronAPI } from "@electron-toolkit/preload";

declare global {
  interface Window {
    electron: ElectronAPI;
    api: { pull: (setter: (value: string) => void) => void };
  }
}
