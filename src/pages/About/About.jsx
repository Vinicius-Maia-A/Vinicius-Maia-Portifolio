import { Grid, Box, Typography } from '@mui/material'
import React from 'react'
import TerminalGrid from '../../components/TerminalGrid'
import TerminalTableDeco from '../../components/TerminalTableDeco'

const About = () => {
  const terminalDecorationTexts = [
    { year: '2001 - 2026  13:56', type: '<TXT>', client: 'Quem sou eu', id: crypto.randomUUID() },
    { year: '2001 - 2026  09:23', type: '<TXT>', client: 'Trajetoria', id: crypto.randomUUID() },
    { year: '2001 - 2026  10:12', type: '<TXT>', client: 'Objetivo', id: crypto.randomUUID() },
  ]

  return (
    <Grid component="section" container size={12} direction={{ xs: 'column', md: 'row' }} justifyContent='center'>
      <TerminalGrid container size={{ xs: 12, md: 10 }} direction='column' sx={{ mt: 10 }}>
        <Box
          sx={{
            "& .MuiTypography-root": {
              fontSize: '10px',
              color: '#ffffffa5',
            },
          }}
        >
          <Typography variant='body2'>C:\Users\Vinicius-Maia&gt; cd C:\Users\Vinicius-Maia\about</Typography>
          <Typography variant='body2'>C:\Users\Vinicius-Maia\about&gt; dir</Typography>
        </Box>

        <TerminalTableDeco
          tableInfo={terminalDecorationTexts}
          firstColumnName='Date'
          secondColumnName='Type'
          thirdColumnName='Title'
        />

        <Box sx={{ "& .MuiTypography-body2": { color: (theme) => theme.palette.text.white } }}>
          <Grid container direction='column' size={8} sx={{ mt: 4 }}>
            <Typography variant='h3' sx={{ mb: 2 }}>Quem sou eu?</Typography>
            <Typography variant='body2' sx={{ mb: 4 }}>
              Me chamo Vinicius Maia, tenho 24 anos e sou desenvolvedor fullstack graduado em Ciencias da Computacao.
              Estudo tecnologia e programacao desde que entrei na faculdade em 2020. Nasci em Cubatao - SP e, devido
              ao trabalho dos meus pais, vivi em regioes diferentes do Brasil e tambem no exterior por alguns anos.
              Essa vivencia me ajudou a desenvolver idiomas, adaptabilidade e soft skills. Sou estudioso, gosto de
              aprender continuamente e de entender os fundamentos de cada area.
            </Typography>
          </Grid>

          <Grid container direction='column' size={8} sx={{ mt: 4 }}>
            <Typography variant='h3' sx={{ mb: 2 }}>Qual a minha trajetoria academica e profissional?</Typography>
            <Typography variant='body2' sx={{ mb: 4 }}>
              O ensino fundamental ocorreu em escolas de Sao Paulo e Pernambuco. Conclui o ensino medio em 2020, na
              escola Notre Dame, na Republica Dominicana. Depois voltei ao Brasil e me formei em Ciencias da Computacao
              em 2025. Durante a graduacao, atuei como professor de ingles, tecnico de informatica e desenvolvedor web.
            </Typography>
          </Grid>

          <Grid container direction='column' size={8} sx={{ mt: 4 }}>
            <Typography variant='h3' sx={{ mb: 2 }}>Objetivo</Typography>
            <Typography variant='body2' sx={{ mb: 4 }}>
              Sou apaixonado por programacao e jogos digitais. Meu objetivo e evoluir ao maximo nessas areas, trocar
              experiencias com outras pessoas e crescer profissionalmente em desenvolvimento de software no Brasil.
              Quero contribuir com times de tecnologia de forma consistente e com impacto real no negocio.
            </Typography>
          </Grid>
        </Box>
      </TerminalGrid>
    </Grid>
  )
}

export default About
