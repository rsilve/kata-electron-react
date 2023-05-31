import { Stack, Typography } from '@mui/material'
import React, { useMemo } from 'react'
import { useTimerContext } from '../context/TimerContextProvider'
import dayjs from 'dayjs'

const Clock = (): React.ReactElement => {
  const frame = useTimerContext()
  const formatted = useMemo(() => dayjs(frame.time).format('HH:mm:ss SSS'), [frame])
  return (
    <Stack direction={'row'} justifyContent={'center'}>
      <Typography variant={'h2'} fontFamily={'monospace'}>
        {formatted}
      </Typography>
    </Stack>
  )
}

export default Clock
