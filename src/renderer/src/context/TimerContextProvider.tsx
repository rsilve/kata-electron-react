import { createContext } from 'react'

type TimerHelper = {
  pull: (setter: (value: string) => void) => void
}

const DEFAULT: TimerHelper = {
  pull: (): void => {}
}
export const TimerContext = createContext<TimerHelper>(DEFAULT)

function initContext(ipcRenderer: any): TimerHelper {
  return {
    pull: (setter: (value) => void): void => {
      ipcRenderer.on('timestamp-tick', (_: any, arg: any) => {
        setter(arg)
      })
    }
  }
}

export const TimerContextProvider = ({ children }: { children }): JSX.Element => {
  const ipcRenderer = (window as any).electron.ipcRenderer
  return <TimerContext.Provider value={initContext(ipcRenderer)}>{children}</TimerContext.Provider>
}
