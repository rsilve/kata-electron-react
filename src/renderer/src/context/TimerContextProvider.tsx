import { createSignal } from '@react-rxjs/utils'
import { bind } from '@react-rxjs/core'

const [timer, setTimerValue] = createSignal<string>()
const [useTimer] = bind(timer, new Date().toISOString())

export const useTimerContext = (): string => {
  return useTimer()
}

export const TimerContextProvider = ({ children }: { children }): JSX.Element => {
  window.api.listen(setTimerValue)
  return <>{children}</>
}
