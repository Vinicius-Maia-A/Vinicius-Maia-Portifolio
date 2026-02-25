import './Home.css'
import React from 'react'
import { Button, Divider, Grid, Stack, Typography } from '@mui/material'
import profilePic from '../../assets/profile_picture.jpg'
import TechnologyAvatar from './TechnologyAvatar'
import cssIcon from '../../assets/css3-svgrepo-com.svg'
import htmlIcon from '../../assets/html5-svgrepo-com.svg'
import jsIcon from '../../assets/javascript-svgrepo-com.svg'
import nodeIcon from '../../assets/node-js-svgrepo-com.svg'
import wixIcon from '../../assets/wix-svgrepo-com.svg'
import wordpress from '../../assets/wordpress-svgrepo-com.svg'
import reactIcon from '../../assets/react-svgrepo-com.svg'
import mongodb from '../../assets/mongodb-svgrepo-com.svg'
import materialUi from '../../assets/material-ui-svgrepo-com.svg'
import Projects from './Projects'
import Technologies from './Technologies'
import Idioms from './Idioms'

const Home = () => {
  const techList = [
    { icon: cssIcon, name: 'CSS', id: crypto.randomUUID() },
    { icon: htmlIcon, name: 'HTML', id: crypto.randomUUID() },
    { icon: jsIcon, name: 'JavaScript', id: crypto.randomUUID() },
    { icon: nodeIcon, name: 'Node.js', id: crypto.randomUUID() },
    { icon: wixIcon, name: 'Wix', id: crypto.randomUUID() },
    { icon: wordpress, name: 'WordPress', id: crypto.randomUUID() },
    { icon: reactIcon, name: 'React', id: crypto.randomUUID() },
    { icon: mongodb, name: 'MongoDB', id: crypto.randomUUID() },
    { icon: materialUi, name: 'Material UI', id: crypto.randomUUID() },
    { acronym: 'MG', name: 'Mongoose', id: crypto.randomUUID() },
    { acronym: 'EX', name: 'Express.js', id: crypto.randomUUID() },
  ]

  return (
    <Grid component="section" container size={12} direction={{ xs: 'column', md: 'row' }} justifyContent='space-between'>
      <Grid
        size={{ xs: 12, md: 5, lg: 4 }}
        py={{ xs: 5, md: 10 }}
        alignContent={{ xs: 'center', md: 'center' }}
        justifyContent='center'
        sx={{
          "& .MuiTypography-body1": {
            color: (theme) => theme.palette.text.white,
            fontWeight: 200,
          },
        }}
      >
        <Stack direction='column' spacing={0}>
          <Typography variant='h6' sx={{ mb: 1 }}>[Ola, eu sou Vinicius Maia]</Typography>
          <Typography variant='h1' sx={{ mb: 3 }}>Desenvolvedor Fullstack_</Typography>
          <Typography variant='body1'>
            Desenvolvimento Fullstack focado em resultados. Unindo o poder do codigo customizado a agilidade dos
            construtores modernos para criar presencas digitais de alto impacto e performance.
          </Typography>
          <Typography variant='body1' sx={{ mb: 5 }}>&gt; [Sistemas Customizados, Sites Institucionais, MVPs]</Typography>

          <Grid container direction='row' spacing={1} size={{ xs: 10, md: 6 }}>
            <Button
              component='a'
              href="#projects"
              variant='contained'
              color='primary'
              size='large'
              disableElevation
              disableRipple
              sx={{ width: '100%' }}
            >
              {'> Projetos'}
            </Button>

            {techList.map((avatar, index) => (
              index < 8 && (
                <Grid size={3} key={avatar.id}>
                  <TechnologyAvatar img={avatar.icon} tooltip={avatar.name} />
                </Grid>
              )
            ))}
          </Grid>
        </Stack>
      </Grid>

      <Grid
        container
        direction='row'
        size={{ xs: 12, md: 6 }}
        alignContent={{ xs: 'flex-start', md: 'center' }}
        justifyContent='flex-start'
        spacing={2}
        mb={{ xs: 5, md: 0 }}
      >
        <Grid size={5} className="home-profile-image-wrap">
          <img src={profilePic} alt="Profile Picture" className="home-profile-image" />
        </Grid>

        <Grid size={{ xs: 6, md: 6 }} alignContent='center'>
          <Stack direction='column' spacing={0.5} sx={{ display: 'flex' }}>
            <Stack direction='row' spacing={1} justifyContent='space-between'>
              <Typography variant='body1'>SYSTEM_DIAGNOSTICS</Typography>
              <Typography variant='body1'>LIVE</Typography>
            </Stack>

            <Divider sx={{ pt: 2 }} />

            <Typography variant='body2' sx={{ pt: 2 }}>
              <span className="white-text">[Nome]</span>
              .........Vinicius Maia
            </Typography>

            <Typography variant='body2'>
              <span className="white-text">[Idade]</span>
              ..........24 anos
            </Typography>

            <Typography variant='body2'>
              <span className="white-text">[Formacao]</span>
              ..bacharelado em ciencias da computacao - 2025
            </Typography>

            <Divider sx={{ pt: 2 }} />

            <Typography variant='body2' sx={{ pt: 2 }}>
              <span className="white-text">[Email]</span>
              ..........vmaiaazevedo@outlook.com
            </Typography>

            <Typography variant='body2'>
              <span className="white-text">[LinkedIn]</span>
              ......vinicius-maia-555697216/
            </Typography>

            <Typography variant='body2'>
              <span className="white-text">[Tel]</span>
              ................(13) 98164-7250
            </Typography>
          </Stack>
        </Grid>
      </Grid>

      <Projects />

      <Grid component="section" container size={12} direction={{ xs: 'column', md: 'row' }} justifyContent='space-between'>
        <Technologies techList={techList} />
        <Idioms />
      </Grid>
    </Grid>
  )
}

export default Home
