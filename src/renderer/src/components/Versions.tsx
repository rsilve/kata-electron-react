import { useState } from 'react'
import { Stack, Typography } from '@mui/material'

function Versions(): JSX.Element {
  const [versions] = useState(window.electron.process.versions)

  return (
    <Stack spacing={3} direction={'row'} justifyContent={'center'} fontSize={'smaller'}>
      <Typography fontSize={'inherit'}>Electron v{versions.electron}</Typography>
      <Typography fontSize={'inherit'}>Chromium v{versions.chrome}</Typography>
      <Typography fontSize={'inherit'}>Node v{versions.node}</Typography>
      <Typography fontSize={'inherit'}>V8 v{versions.v8}</Typography>
    </Stack>
  )
}

export default Versions
