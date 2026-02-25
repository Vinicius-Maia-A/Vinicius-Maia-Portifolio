import React from 'react'
import { Typography, Button, CardHeader, CardContent, CardActions, Card, Divider } from '@mui/material'

const ExperienceCard = ({ experience }) => {
  const [isExpanded, setIsExpanded] = React.useState(false)

  return (
    <Card
      sx={{
        mb: 4,
        boxShadow: 'none',
        border: '1px solid #00ff00',
        borderRadius: 0,
        "& > .MuiCardHeader-root": {
          "& .MuiTypography-h5 ": {
            fontSize: 16,
          },
          "& .MuiTypography-body1 ": {
            fontSize: 12,
          }
        }
      }}
      variant='outlined'
    >
      <CardHeader
        title={experience.companyName}
        subheader={experience.duration}
        sx={{ borderBottom: '1px solid #00ff00', px: 2, py: 1 }}
      />
      <CardContent>
        <Typography variant='h5'>{experience.role}</Typography>
        <Divider sx={{my: 2}}/>
        <Typography
          className='white-text'
          variant='body2'
          sx={{
            color: theme => theme.palette.text.white,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: isExpanded ? 'unset' : 3,
          }}
        >
          {experience.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button
          variant='outlined'
          sx={{ borderRadius: 0 }}
          disableRipple
          onClick={() => setIsExpanded((prev) => !prev)}
        >
          {isExpanded ? 'Ver menos' : 'Ver mais'}
        </Button>
      </CardActions>
    </Card>
  )
}

export default ExperienceCard
