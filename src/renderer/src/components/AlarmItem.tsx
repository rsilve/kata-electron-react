import { Box, IconButton, Stack, styled, Typography } from '@mui/material'
import { Check, Stop } from '@mui/icons-material'
import React, { PropsWithChildren, useMemo } from 'react'
import { Alarm } from '../services/alarms'

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
          <Typography noWrap={true}>{children}</Typography>
        </StyledText>
        <Typography variant={'body2'}>{alarm.time}</Typography>
        <Box>
          <IconButton size={'small'} onClick={onSelect}>
            {(alarm.enabled && <Check />) || <Stop />}
          </IconButton>
        </Box>
      </Stack>
    </>
  )
}

export default AlarmItem
