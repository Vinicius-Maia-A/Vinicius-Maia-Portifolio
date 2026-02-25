import React from 'react'
import { Grid, Typography, Card, CardHeader, Avatar, useTheme } from '@mui/material'

const Technologies = ({ techList }) => {
  const theme = useTheme();

  return (
    <Grid container direction='column' size={{ xs: 12, md: 6 }} alignItems='flex-start'>
      <Typography sx={{ display: 'block', my: 4 }} variant='h2'>Tecnologias</Typography>
      <Grid container size={10} spacing={2}>
        {
          techList.map((tech) => (
            <Grid size={6} key={tech.id}>
              <Card elevation={0} sx={{ bgcolor: 'transparent', borderRadius: 0 }}>
                <CardHeader
                  sx={{ m: 0, p: 0 }}
                  title={tech.name}
                  avatar={
                    tech.icon ?
                      <Avatar variant='square' src={tech.icon} />
                      :
                      <Avatar variant='square' sx={{ bgcolor: 'transparent', color: theme.palette.portfolioGreen.primary }}>{tech.acronym}</Avatar>
                  }
                />
              </Card>
            </Grid>
          ))
        }
      </Grid>
    </Grid>
  )
}

export default Technologies
