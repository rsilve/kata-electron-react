import { Stack, Typography } from '@mui/material'
import { useContext, useEffect, useState } from 'react'
import { TimerContext } from '../context/TimerContextProvider'
import dayjs from 'dayjs'

const Clock = (): JSX.Element => {
  const context = useContext(TimerContext)
  const [time, setTime] = useState('')
  useEffect(() =>
    context.pull((value) => {
      const formatted = dayjs(value).format('HH:mm:ss')
      setTime(formatted)
    })
  )
  return (
    <Stack direction={'row'} justifyContent={'center'}>
      <Typography variant={'h2'} fontFamily={'monospace'}>
        {time}
      </Typography>
    </Stack>
  )
}

export default Clock
