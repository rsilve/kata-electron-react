import { Button, Stack } from '@mui/material'
import { useNotification } from '../context/TimerContextProvider'
import React, { useEffect, useState } from 'react'

const StopButton = ({ handleStop }: { handleStop: () => void }): React.ReactElement => (
  <Button variant={'contained'} onClick={handleStop} color={'warning'}>
    Stop
  </Button>
)
const NotificationPane = (): React.ReactElement => {
  const notification = useNotification()
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    if (notification) {
      setEnabled(true)
    }
  }, [notification])

  const handleStop = (): void => {
    setEnabled(false)
  }

  return <Stack>{enabled && <StopButton handleStop={handleStop} />}</Stack>
}

export default NotificationPane
