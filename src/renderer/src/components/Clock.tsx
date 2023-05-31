import { Stack, Typography } from '@mui/material'
import React, { useMemo } from 'react'
import { useTimerContext } from '../context/TimerContextProvider'
import dayjs from 'dayjs'

const Clock = (): React.ReactElement => {
  const context = useTimerContext()
  const formatted = useMemo(() => dayjs(context).format('HH:mm:ss'), [context])

  return (
    <Stack direction={'row'} justifyContent={'center'}>
      <Typography variant={'h2'} fontFamily={'monospace'}>
        {formatted}
      </Typography>
    </Stack>
  )
}

export default Clock
