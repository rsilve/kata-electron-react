import { Card, CardActionArea, CardContent, Stack, styled, Typography } from '@mui/material'
import { Check, Stop } from '@mui/icons-material'
import React, { PropsWithChildren, useMemo } from 'react'
import { Alarm } from '@shared'

type AlarmItemProps = {
  alarm: Alarm
  onSelect: () => void
  selected: boolean
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
    <Card variant={'outlined'}>
      <CardActionArea onClick={onSelect}>
        <CardContent>
          <Stack direction="row" spacing={1} alignItems={'center'} justifyContent={'center'}>
            <StyledText>
              <Typography noWrap={true}>{children}</Typography>
            </StyledText>
            <Typography variant={'body2'}>{alarm.time}</Typography>
            {(alarm.enabled && <Check />) || <Stop />}
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default AlarmItem
