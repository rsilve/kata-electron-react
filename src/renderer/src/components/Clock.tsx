import { Stack, Typography } from '@mui/material'
import { useContext, useEffect, useState } from 'react'
import { TimerContext } from '../context/TimerContextProvider'

const Clock = (): JSX.Element => {
  const context = useContext(TimerContext)
  const [time, setTime] = useState('')
  useEffect(() => {
    context.pull((value) => setTime(value))
  })
  return (
    <Stack direction={'row'} justifyContent={'center'}>
      <Typography variant={'h4'}>{time}</Typography>
    </Stack>
  )
}

export default Clock
