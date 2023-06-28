import { Box, IconButton, Stack, styled, Typography } from '@mui/material'
import { Edit } from '@mui/icons-material'
import React, { PropsWithChildren, useMemo } from 'react'
import { Alarm } from '../services/alarms'
import { grey } from '@mui/material/colors'

type AlarmItemProps = {
  alarm: Alarm
  selected: boolean
  onSelect: () => void
}

const AlarmItem = ({
  alarm,
  selected,
  onSelect,
  children
}: PropsWithChildren<AlarmItemProps>): React.ReactElement => {
  const StyledText = useMemo(
    () =>
      styled('span')({
        textDecoration: selected ? 'underline' : 'none'
      }),
    [selected]
  )

  return (
    <>
      <Stack direction="row" spacing={1} alignItems={'baseline'} justifyContent={'center'}>
        <StyledText>
          <Typography>{children}</Typography>
        </StyledText>
        <Typography variant={'body2'}>{alarm.time}</Typography>
        <Typography variant={'body2'} color={grey[500]}>
          {(alarm.enabled && 'On') || 'Off'}
        </Typography>
        <Box marginBottom={-2}>
          <IconButton size={'small'} onClick={onSelect}>
            <Edit />
          </IconButton>
        </Box>
      </Stack>
    </>
  )
}

export default AlarmItem
