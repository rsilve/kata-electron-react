import Versions from './components/Versions'
import icons from './assets/icons.svg'
import { Box } from '@mui/material'

import Clock from './components/Clock'
import { TimerContextProvider } from './context/TimerContextProvider'
import React from 'react'

function App(): React.ReactElement {
  return (
    <Box padding={4}>
      <Versions></Versions>
      <svg className="hero-logo" viewBox="0 0 900 300">
        <use xlinkHref={`${icons}#electron`} />
      </svg>
      <TimerContextProvider>
        <Clock />
      </TimerContextProvider>
    </Box>
  )
}

export default App
