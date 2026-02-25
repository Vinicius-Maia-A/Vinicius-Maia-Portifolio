import { useTheme } from '@mui/material/styles';
import React from 'react'
import { Avatar, Tooltip } from '@mui/material'

const TechnologyAvatar = ({ img, tooltip }) => {

  const theme = useTheme();

  return (
    <Tooltip followCursor disableInteractive title={tooltip} placement="top">
      <Avatar
        sx={{
          bgcolor: theme.palette.portfolioGreen.background,
          width: 50,
          height: 50,
          p: 1
        }}
        variant="square"
        src={img}
      />
    </Tooltip>
  )
}

export default TechnologyAvatar
