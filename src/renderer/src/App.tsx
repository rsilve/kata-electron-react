import Versions from './components/Versions'
import icons from './assets/icons.svg'
import { Box } from '@mui/material'
import React from 'react'
import Clock from './components/Clock'

function App(): JSX.Element {
  return (
    <Box padding={4}>
      <Versions></Versions>

      <svg className="hero-logo" viewBox="0 0 900 300">
        <use xlinkHref={`${icons}#electron`} />
      </svg>

      <Clock />
    </Box>
  )
}

export default App
