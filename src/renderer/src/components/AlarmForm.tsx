import { IconButton, Stack, Switch, TextField, Typography } from '@mui/material'
import React from 'react'
import { Close } from '@mui/icons-material'
import { Alarm } from '@shared'

type AlarmFormProps = {
  alarm: Alarm
  onEdit: (alarm: Alarm) => void
  toggleEdit: () => void
}
const AlarmForm = ({ alarm, onEdit, toggleEdit }: AlarmFormProps): React.ReactElement => {
  function handleEnabledChange(event): void {
    const updated: Alarm = { ...alarm }
    updated.enabled = event.target.checked
    updated.time = updated.enabled ? updated.time : '--:--'
    onEdit(updated)
  }

  const handleTimeChange = (event): void => {
    const updated: Alarm = { ...alarm }
    updated.time = event.target.value
    updated.enabled = updated.time !== '--:--'
    onEdit(updated)
  }
  return (
    <>
      <Stack direction="row" spacing={1} alignItems="center" justifyContent={'center'}>
        <TextField value={alarm.time} type={'time'} onChange={handleTimeChange}></TextField>
        <Typography>Off</Typography>
        <Switch checked={alarm.enabled} onChange={handleEnabledChange} />
        <Typography>On</Typography>
        <IconButton size={'small'} onClick={toggleEdit}>
          <Close />
        </IconButton>
      </Stack>
    </>
  )
}

export default AlarmForm
