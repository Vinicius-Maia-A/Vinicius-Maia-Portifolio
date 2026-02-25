import React from 'react'
import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody } from '@mui/material'
import { Box, Grid, Typography } from '@mui/material'

const TerminalTableDeco = ({ tableInfo, firstColumnName, secondColumnName, thirdColumnName }) => {
  return (
    <Grid size={{ xs: 12, md: 6, lg: 4 }} mb={2}>
      <Box
        direction='column'
        sx={{
          "& .MuiTableCell-root": {
            borderBottom: 'none',
            fontSize: "10px",
            padding: 0,
            color: '#ffffffa5'
          },
        }}
      >

        <TableContainer >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>{firstColumnName}</TableCell>
                <TableCell>{secondColumnName}</TableCell>
                <TableCell>{thirdColumnName}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableInfo.map(({ year, type, client, id }) => (
                <TableRow key={id}>
                  <TableCell>{year}</TableCell>
                  <TableCell>{type}</TableCell>
                  <TableCell>{client}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

      </Box>
    </Grid>
  )
}

export default TerminalTableDeco
