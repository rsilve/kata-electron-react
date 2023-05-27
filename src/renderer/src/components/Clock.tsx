import { Stack, Typography } from '@mui/material'
import { useMemo } from 'react'
import { useTimerContext } from '../context/TimerContextProvider'
import dayjs from 'dayjs'

const Clock = (): JSX.Element => {
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
