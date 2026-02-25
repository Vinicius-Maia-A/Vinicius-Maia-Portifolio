import React from 'react'
import { Grid, Typography, Stack, Button, Box, useTheme } from "@mui/material"
import { Link } from "react-router"
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {

  const theme = useTheme();

  return (
    <Grid
      size={12}
      container
      sx={{ py: 6, px: { xs: 2, md: '40px' } }}
      bgcolor={theme.palette.portfolioGreen.background}
      borderTop={`1px solid ${theme.palette.primary.main}`}
      direction={{ xs: 'column', md: 'row' }}
      spacing={2}
    >

      <Grid size={12} pb={7} >
        <Typography variant="h4">
          [Portfolio] Vinicius Maia_
        </Typography>
      </Grid>

      <Grid size={{ xs: 12, md: 4 }} container direction='column' alignItems='flex-start' justifyContent='center'>
        <Typography variant="h5">
          {/* © 2024 Vinicius Maia. All rights reserved. */}
          Contato
        </Typography>
        <Stack>
          <Grid size={12} container spacing={1} alignItems='center' height='40px'>
            <WhatsAppIcon />
            <Typography variant="body1">
              <span className='white-text'>[WhatsApp]</span> +55 13 98164-7250
            </Typography>
          </Grid>

          <Grid size={12} container spacing={1} alignItems='center' height='40px'>
            <EmailOutlinedIcon />
            <Typography variant="body1">
              <span className='white-text'>[Email]</span> vmaiaazevedo@outlook.com
            </Typography>
          </Grid>

          <Grid size={12} container spacing={1} alignItems='center' height='40px'>
            <LinkedInIcon />
            <Typography variant="body1" noWrap>
              <span className='white-text'>[Linkedin]</span> vinicius-maia-555697216
            </Typography>
          </Grid>
        </Stack>
      </Grid>

      <Grid size={{ xs: 12, md: 4 }} container direction='column' alignItems='flex-start' justifyContent='center'>
        <Typography variant="h5">
          Páginas
        </Typography>
        <Stack>
          <Grid size={12} container spacing={1} alignItems='center'>
            <Box sx={{
              "& a": {
                textDecoration: "none",
                color: "#fff"
              },
              "& a:hover": {
                textDecoration: "underline",
                color: theme.palette.primary.main
              }
            }}>
              <Stack>
                <Link to='/'>&gt; Projetos</Link>
                <Link to='/about'>&gt; Sobre mim</Link>
                <Link to='/experiences'>&gt; Experiencias</Link>
              </Stack>
            </Box>
          </Grid>

        </Stack>
      </Grid>

      <Grid size={{ xs: 12, md: 4 }} container direction='column' alignItems='flex-start' justifyContent='center'>
        <Button
          component='a'
          href='https://wa.link/qo9igf'
          size="large" py={2}
          variant="contained"
          sx={{
            backgroundColor: theme.palette.primary.dark,
            color: '#fff',
            "&:hover": { backgroundColor: theme.palette.primary.main }
          }}>
          &gt; Entrar em contato
        </Button>
      </Grid>
    </Grid>
  )
}

export default Footer
