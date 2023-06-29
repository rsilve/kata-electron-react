import { Grid, Stack } from '@mui/material'
import React, { useCallback, useState } from 'react'
import { SelectedAlarm } from './type'
import AlarmForm from './AlarmForm'
import { getAlarms, saveAlarms } from '../services/alarms'
import AlarmItem from './AlarmItem'
import { Alarm, AlarmList } from '../../../shared'

const Alarms = (): React.ReactElement => {
  const [alarms, setAlarms] = useState<AlarmList>(getAlarms())
  const [alarmEdited, setAlarmEdited] = useState<SelectedAlarm>(undefined)

  const handleSelectAlarm = useCallback(
    (index: 0 | 1) => {
      return () => {
        setAlarmEdited(alarmEdited == index ? undefined : index)
      }
    },
    [alarmEdited]
  )

  const handleEdit = useCallback(
    (alarm: Alarm) => {
      if (alarmEdited !== undefined) {
        const updated: AlarmList = [...alarms]
        updated[alarmEdited] = alarm
        setAlarms(updated)
        saveAlarms(updated)
      }
    },
    [alarms, setAlarms, alarmEdited]
  )

  return (
    <>
      <Stack direction={'row'} justifyContent={'center'}>
        <Stack>
          <Grid container spacing={5}>
            <Grid item xs={6}>
              <AlarmItem
                alarm={alarms[0]}
                selected={alarmEdited === 0}
                onSelect={handleSelectAlarm(0)}
              >
                Alarm 1
              </AlarmItem>
            </Grid>
            <Grid item xs={6}>
              <AlarmItem
                alarm={alarms[1]}
                selected={alarmEdited === 1}
                onSelect={handleSelectAlarm(1)}
              >
                Alarm 2
              </AlarmItem>
            </Grid>
          </Grid>
        </Stack>
      </Stack>
      {alarmEdited !== undefined && (
        <Stack marginTop={2}>
          <AlarmForm
            alarm={alarms[alarmEdited]}
            onEdit={handleEdit}
            toggleEdit={handleSelectAlarm(alarmEdited)}
          />
        </Stack>
      )}
    </>
  )
}

export default Alarms
