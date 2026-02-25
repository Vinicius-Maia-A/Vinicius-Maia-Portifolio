import React from 'react'
import { Grid, Typography, Box } from "@mui/material"
import TerminalTableDeco from "../../components/TerminalTableDeco"
import TerminalGrid from '../../components/TerminalGrid'
import ExperienceCard from './ExperienceCard'

const Experiences = () => {
  const terminalDecorationTexts = [
    { year: '2023 - 2025  13:56', type: '<FILE>', client: 'Agencia Ulalau', id: crypto.randomUUID() },
    { year: '2023  09:23', type: '<FILE>', client: 'Manalink', id: crypto.randomUUID() },
    { year: '2023  10:12', type: '<FILE>', client: 'Wizard by Pearson', id: crypto.randomUUID() },
    { year: '2022  10:12', type: '<FILE>', client: 'Enjoy', id: crypto.randomUUID() },
  ]

  const experiences = [
    {
      companyName: 'Agencia Ulalau',
      duration: '2023 - 2025',
      role: 'Desenvolvedor web',
      description:
        'Atuei como desenvolvedor e estrategista, cobrindo o ciclo completo de criacao de paginas web e landing pages focadas em conversao. Trabalhei no front-end e na integracao de APIs de email marketing, automacoes via WhatsApp e formularios de captura de leads.',
      id: crypto.randomUUID(),
    },
    {
      companyName: 'Manalink',
      duration: '2023',
      role: 'Tecnico de informatica',
      description:
        'Atuei com manutencao preventiva e corretiva de hardware, instalacao e configuracao de softwares, suporte presencial em ambiente industrial e suporte remoto para notebooks locados.',
      id: crypto.randomUUID(),
    },
    {
      companyName: 'Wizard by Pearson',
      duration: '2023',
      role: 'Professor de ingles',
      description:
        'Lecionei para publicos de diferentes idades em aulas individuais e em grupo. A experiencia fortaleceu minha comunicacao, didatica e capacidade de explicar conceitos complexos de forma clara.',
      id: crypto.randomUUID(),
    },
    {
      companyName: 'Enjoy',
      duration: '2022',
      role: 'Instrutor de ingles e informatica',
      description:
        'Ministrei aulas para criancas e adolescentes, com planos personalizados e atividades praticas. Desenvolvi ainda mais paciencia, criatividade pedagogica e comunicacao objetiva.',
      id: crypto.randomUUID(),
    },
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
          <Typography variant='body2'>C:\Users\Vinicius-Maia&gt; cd C:\Users\Vinicius-Maia\experiences</Typography>
          <Typography variant='body2'>C:\Users\Vinicius-Maia\experiences&gt; dir</Typography>
        </Box>

        <TerminalTableDeco tableInfo={terminalDecorationTexts} firstColumnName='Date' secondColumnName='Type' thirdColumnName='Title' />

        <Typography variant='h3' sx={{ mt: 4, mb: 2 }}>Experiencias Profissionais</Typography>
        {experiences.map((experience) => (
          <Grid size={{ xs: 12, md: 8 }} key={experience.id}>
            <ExperienceCard experience={experience} />
          </Grid>
        ))}
      </TerminalGrid>
    </Grid>
  )
}

export default Experiences
