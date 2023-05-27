import { createContext } from 'react'

type TimerHelper = {
  pull: (setter: (value: string) => void) => void
}

const DEFAULT: TimerHelper = {
  pull: (): void => {}
}
export const TimerContext = createContext<TimerHelper>(DEFAULT)

function initContext(window: Window): TimerHelper {
  const api = window.api
  return {
    pull: api.pull
  }
}

export const TimerContextProvider = ({ children }: { children }): JSX.Element => {
  return <TimerContext.Provider value={initContext(window)}>{children}</TimerContext.Provider>
}
