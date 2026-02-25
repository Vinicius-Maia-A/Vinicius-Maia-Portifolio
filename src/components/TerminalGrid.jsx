import styled from '@emotion/styled'
import React from 'react'
import { Grid } from '@mui/material'

const TerminalGrid = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.palette.portfolioGreen.background,
  alignItems: 'flex-start',
  padding: "40px 20px",
  borderTop: `1px solid ${theme.palette.portfolioGreen.primary}`
}))

export default TerminalGrid
