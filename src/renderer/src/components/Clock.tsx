import { Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Clock = () => {
  const [time, setTime] = useState('')
  const ipcRenderer = (window as any).electron.ipcRenderer
  useEffect(() => {
    ipcRenderer.on('timestamp-tick', (event: any, arg: any) => {
      setTime(arg)
    })
  })
  return (
    <Stack direction={'row'} justifyContent={'center'}>
      <Typography variant={'h4'}>{time}</Typography>
    </Stack>
  )
}

export default Clock
