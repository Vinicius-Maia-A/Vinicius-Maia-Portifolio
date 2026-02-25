import React from 'react'
import { Grid, Stack, Typography } from '@mui/material'

const Idioms = () => {
  return (
    <Grid container direction='column' size={{ xs: 12, md: 4 }} alignItems='flex-start'>
      <Typography variant='h2' sx={{ my: 4 }}>Idiomas</Typography>
      <Stack spacing={2}>
        <Typography variant='body2'><span className="white-text">[Português]</span>...... Nativo</Typography>
        <Typography variant='body2'><span className="white-text">[Inglês]</span>......... Fluente</Typography>
        <Typography variant='body2'><span className="white-text">[Espanhol]</span>....... Fluente</Typography>
      </Stack>
    </Grid>
  )
}

export default Idioms
