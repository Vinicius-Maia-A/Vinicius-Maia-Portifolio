import React from 'react'
import {
  Typography,
  Button,
  CardHeader,
  CardContent,
  CardActions,
  Card,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Divider,
  IconButton,
} from '@mui/material'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

const ProjectCard = ({ project }) => {
  const [open, setOpen] = React.useState(false)
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0)

  const images = Array.isArray(project.images) ? project.images : []

  const handleOpen = () => {
    setCurrentImageIndex(0)
    setOpen(true)
  }

  const handleClose = () => setOpen(false)

  const showPrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const showNextImage = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  return (
    <>
      <Card
        sx={{
          boxShadow: 'none',
          border: '1px solid #00ff00',
          borderRadius: 0,
          "& > .MuiCardHeader-root .MuiTypography-h5": { fontSize: 16 },
          "& > .MuiCardHeader-root .MuiTypography-body1": { fontSize: 12 },
        }}
        variant='outlined'
      >
        <CardHeader
          title={project.companyName}
          subheader={project.duration}
          sx={{ borderBottom: '1px solid', borderColor: (theme) => theme.palette.primary.main, px: 2, py: 1 }}
        />
        <CardContent>
          <Typography variant='body1'>Meus servicos:</Typography>
          {project.services.map((service, index) => (
            index < 4 && (
              <Typography className='white-text' variant='body2' key={index}>
                &gt; {service.name}
              </Typography>
            )
          ))}
        </CardContent>
        <CardActions disableSpacing>
          <Button variant='outlined' sx={{ borderRadius: 0 }} disableRipple onClick={handleOpen}>
            Ver projeto
          </Button>
        </CardActions>
      </Card>

      <Dialog
        open={open}
        onClose={handleClose}
        scroll="paper"
        maxWidth="md"
        fullWidth
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              border: '1px solid',
              borderColor: (theme) => theme.palette.primary.main,
              borderRadius: 0,
              backgroundColor: '#050d05',
            },
          },
        }}
      >
        <DialogTitle sx={{ px: 6, pt: 4 }}>
          <Typography variant="h4" sx={{ pb: 1 }}>{project.companyName}</Typography>
          <Typography variant="body2" sx={{ color: (theme) => theme.palette.text.white, opacity: 0.8 }}>
            {project.projectType}
          </Typography>
        </DialogTitle>

        <DialogContent
          dividers
          sx={{
            px: 6,
            py: 2,
            scrollbarWidth: 'thin',
            scrollbarColor: '#00ff00 #000',
            "&::-webkit-scrollbar": { width: 10 },
            "&::-webkit-scrollbar-track": { backgroundColor: '#000000' },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: '#00ff00',
              border: '2px solid #000000',
              borderRadius: 0,
            },
            "&::-webkit-scrollbar-button": {
              display: 'none',
              width: 0,
              height: 0,
            },
          }}
        >
          <Typography variant="body1" sx={{ mb: 3 }}>
            {project.description}
          </Typography>

          <Divider sx={{ my: 2 }} />

          <Typography variant="h4" sx={{ mb: 1 }}>Servicos</Typography>
          {project.services.map((service, index) => (
            <Box
              key={`${service.name}-${index}`}
              sx={{
                mb: 1.5,
                "& .MuiTypography-body2": { fontWeight: 200 },
                "& .MuiTypography-body1": { fontSize: 16 },
              }}
            >
              <Typography variant="body1" className="white-text">
                &gt; {service.name}
              </Typography>
              <Typography variant="body2">{service.description}</Typography>
            </Box>
          ))}

          <Divider sx={{ my: 2 }} />

          <Typography variant="h6" sx={{ mb: 2 }}>Paginas criadas</Typography>
          {images.length > 0 ? (
            <Box>
              <Box
                sx={{
                  width: '100%',
                  height: { xs: 180, sm: 300, md: 450 },
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                }}
              >
                <img
                  src={images[currentImageIndex]}
                  alt={`${project.companyName} - imagem ${currentImageIndex + 1}`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </Box>

              <Box sx={{ mt: 1.5, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <IconButton onClick={showPrevImage} sx={{ color: '#fff' }} aria-label="Imagem anterior">
                  <ArrowBackIosNewIcon fontSize="small" />
                </IconButton>
                <Typography variant="body2">{currentImageIndex + 1} / {images.length}</Typography>
                <IconButton onClick={showNextImage} sx={{ color: '#fff' }} aria-label="Proxima imagem">
                  <ArrowForwardIosIcon fontSize="small" />
                </IconButton>
              </Box>
            </Box>
          ) : (
            <Typography variant="body2">Nenhuma imagem cadastrada para este projeto.</Typography>
          )}
        </DialogContent>

        <DialogActions sx={{ px: 6, py: 2 }}>
          <Button onClick={handleClose} variant="outlined" sx={{ borderRadius: 0 }} disableRipple>
            Fechar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default ProjectCard
