import React from 'react'
import { Grid, Typography, Box } from '@mui/material'
import TerminalGrid from '../../components/TerminalGrid'
import TerminalTableDeco from '../../components/TerminalTableDeco';
import ProjectCard from './ProjectCard';

const Projects = () => {

  const terminalDecorationTexts = [
    { year: '2023 - 2025  13:56', type: '<SITE>', client: 'Cuidando de Mamães', id: crypto.randomUUID() },
    { year: '2023 - 2025  09:23', type: '<SITE>', client: 'Psicocare', id: crypto.randomUUID() },
    { year: '2024 - 2025  10:12', type: '<SITE>', client: 'Christiane Ribeiro', id: crypto.randomUUID() },
    { year: '2023  14:56', type: '<APP>', client: 'Leticia Oliveira', id: crypto.randomUUID() },
    { year: '2025  08:20', type: '<PAGINA>', client: 'Rafaela Spigariol', id: crypto.randomUUID() },
  ];


  const projects = [
    {
      id: crypto.randomUUID(),
      companyName: 'Cuidando de Mamães',
      projectType: 'Site Institucional',
      description: 'Desenvolvimento de site institucional para a Cuidando de Mamães, focado em apresentar os serviços oferecidos, depoimentos de clientes e um blog com dicas para gestantes.',
      services: [
        { name: 'Desenvolvimento de páginas web', description: 'Cuidando de Mamães é uma empresa de educação voltada para cursos e especializações na área da Psicologia perinatal. A demanda de criação de páginas era alta e a comunicação com toda a equipe de marketing era essencial e cotidiana. Logo, este era o serviço de maior demanda que tive deste cliente.' },
        { name: 'Manutenção em App Mobile', description: 'Com o crescimento do Cuidando de Mamães, suas alunas demandaram um aplicativo mobile e, junto com a Agência Ulalau (agência da qual fiz parte), desenvolvemos e fizemos manutenções regulares no aplicativo.' },
        { name: 'Diagramação de materiais', description: 'Diagramei do 0 e sozinho a Apostila da Capacitação em Saúde Mental Perinatal, a Apostila da Pós-graduação em Saúde Mental Perinatal e o livro da autoria de Luzia Maia "Enfrentando a Ansiedade na Gestação". Todos os materiais foram diagramados com o aplicativo InDesign da Adobe.' },
        { name: 'Otimização SEO', description: 'Tomei a iniciativa e configurei e melhorei o SEO de todas as páginas do site do Cuidando de Mamães.' },
        { name: 'Edição de vídeo', description: 'Editei vídeos para eventos e para as redes sociais do Cuidando de Mamães.' },
        { name: 'Criação de conteúdo para redes sociais', description: 'Durante meus primeiros trabalhos com o CDM eu era responsável pela criação das artes para a conta profissional da marca.' },
        { name: 'Configuração do Email Marketing', description: 'Fui responsável pelo desenvolvimento de emails, configuração de fluxo dos leads, criação de listas, manuseio de tags e integração do email marketing com outras plataformas.' },
      ],
      images: [
        'src\\assets\\CDM PAGES\\CDM ABOUT 1.png',
        'src\\assets\\CDM PAGES\\CDM ABOUT 2.png',
        'src\\assets\\CDM PAGES\\CDM APP 1.png',
        'src\\assets\\CDM PAGES\\CDM APP 2.png',
        'src\\assets\\CDM PAGES\\CDM APP 3.png',
        'src\\assets\\CDM PAGES\\CDM APP 4.png',
        'src\\assets\\CDM PAGES\\CHECKOUT PAGE 1.png',
        'src\\assets\\CDM PAGES\\GUIA COPIA E COLA 1.png',
        'src\\assets\\CDM PAGES\\PSMP 1.png',
        'src\\assets\\CDM PAGES\\PSMP 2.png',
        'src\\assets\\CDM PAGES\\SBSMP 1.png',
        'src\\assets\\CDM PAGES\\SBSMP 2.png',
        'src\\assets\\CDM PAGES\\SBSMP 3.png',
        'src\\assets\\CDM PAGES\\SBSMP 4.png',
      ],
      duration: '2023 - 2025',
    },

    {
      id: crypto.randomUUID(),
      companyName: 'Dra. Christiane Ribeiro',
      projectType: 'Landing pages/Social media',
      description: 'Desenvolvi páginas para lançamento de produtos e vendas. Fui responsável pela configuração do email marketing e criação de artes de redes sociais.',
      services: [
        { name: 'Desenvolvimento de páginas web', description: 'Criei as primeiras páginas de lançamento para a Dra. Christiane Ribeiro, que envolviam landing pages e páginas de vendas.' },
        { name: 'Diagramação de E-book', description: 'Diagramei o primeiro e-book para TDAH em mulheres da Dra. Christiane.' },
        { name: 'Criação de conteúdo para redes sociais', description: 'Era responsável pela criação de conteúdo (artes e videos) destinados a processos de marketing para o seu instagram.' },
        { name: 'Configuração do Email Marketing', description: 'Fui responsável pelo desenvolvimento de emails, configuração de fluxo dos leads, criação de listas, manuseio de tags e integração do email marketing com outras plataformas.' },
      ],
      images: [

      ],
      duration: '2024',
    },

    {
      id: crypto.randomUUID(),
      companyName: 'Psicocare',
      projectType: 'Site institucional',
      description: 'Desenvolvi páginas para lançamento de produtos e vendas. Fui responsável pela criação de conteúdo de redes sociais da marca.',
      services: [
        { name: 'Desenvolvimento de páginas web', description: 'Criei páginas para o site ja existente da Psicocare e um novo site do zero para o projeto de Pos-graduacao e cursos variados da empresa.' },
        { name: 'Criação de conteúdo para redes sociais', description: 'Era responsável pela criação de conteúdo (artes e videos) destinados a processos de marketing para o seu instagram.' },
        { name: 'Configuração do Email Marketing', description: 'Fui responsável pelo desenvolvimento de emails, configuração de fluxo dos leads, criação de listas, manuseio de tags e integração do email marketing com outras plataformas.' },
      ],
      images: [
        'src\\assets\\PSICOCARE PAGES\\HOME 1.png',
        'src\\assets\\PSICOCARE PAGES\\HOME 2.png',
        'src\\assets\\PSICOCARE PAGES\\PPO 1.png',
        'src\\assets\\PSICOCARE PAGES\\PPO 2.png',
        'src\\assets\\PSICOCARE PAGES\\PPO 3.png',
        'src\\assets\\PSICOCARE PAGES\\CPPH 1.png',
        'src\\assets\\PSICOCARE PAGES\\CPPH 2.png',
        'src\\assets\\PSICOCARE PAGES\\CPPH 3.png',
        'src\\assets\\PSICOCARE PAGES\\IPH 1.png',
        'src\\assets\\PSICOCARE PAGES\\IPH 2.png',
        'src\\assets\\PSICOCARE PAGES\\CHECKOUT 1.png',
        
      ],
      duration: '2023 - 2025',
    },

    {
      id: crypto.randomUUID(),
      companyName: 'Letícia Oliveira',
      projectType: 'App mobile/Redes sociais',
      description: 'Fiz parte do desenvolvimento do aplicativo da comunidade feminina e da criação do fluxo de lançamento de Letícia (Criação de conteúdo para redes sociais, landing pages, página de checkout, página de vendas, configuração do email marketing e fluxo de leads).',
      services: [
        { name: 'Desenvolvimento de páginas web', description: 'Desenvolvi as páginas para o lançamento da comunidade feminina da leticia (página de vendas, landing page, página de checkout).' },
        { name: 'Diagramação de E-book', description: 'Diagramei o primeiro e-book para TDAH em mulheres da Dra. Christiane.' },
        { name: 'Criação de roteiros', description: 'Fiquei responsável por criar alguns roteiros utilizados no marketing de lançamento do produto da Letícia.' },
        { name: 'Configuração do Email Marketing', description: 'Fui responsável pelo desenvolvimento de emails, configuração de fluxo dos leads, criação de listas, manuseio de tags e integração do email marketing com outras plataformas.' },
        { name: 'Aplicativo Mobile', description: 'Fiz parte do desenvolvimento do aplicativo da Comunidade Feminina.' },
      ],
      images: [

      ],
      duration: '2025',
    },
  ]

  return (
    <Grid
      id='projects'
      component="section"
      container
      size={12}
      direction='column'
      sx={{ mb: 10 }}
    >
      <TerminalGrid container size={12} direction='column'>
        <Box sx={{
          "& .MuiTypography-root": {
            fontSize: '10px',
            color: '#ffffffa5'
          }
        }}>
          <Typography variant='body2'>C:\Users\Vinicius-Maia&gt; cd “C:\Users\Vinicius-Maia\projects”</Typography>
          <Typography variant='body2'>C:\Users\Vinicius-Maia\projects&gt; dir</Typography>
        </Box>

        <TerminalTableDeco tableInfo={terminalDecorationTexts} firstColumnName='Date' secondColumnName='Type' thirdColumnName='Client' />

        <Typography variant='h2' sx={{ my: 4 }}>Projetos em Destaque_</Typography>

        <Grid container size={12} direction='row' spacing={3}>
          {
            projects.map((project) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={project.id}>
                <ProjectCard project={project} />
              </Grid>
            ))
          }
        </Grid>

      </TerminalGrid>
    </Grid>
  )
}

export default Projects
