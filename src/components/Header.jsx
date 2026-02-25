import React from 'react'
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu'
import { Link } from "react-router"

const Header = () => {
  const [open, setOpen] = React.useState(false)

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/experiences', label: 'Experiences' },
  ]

  const closeDrawer = () => setOpen(false)

  const theme = useTheme();

  return (
    <AppBar position="static" elevation={0} sx={{ m: 0, p: 0, borderBottom: '1px solid #00ff00', backgroundColor: 'transparent' }}>
      <Toolbar sx={{ "&.MuiToolbar-root": { p: 0 } }}>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <Link to='/'>
            [Portfolio] Vinicius Maia_
          </Link>
        </Typography>

        <IconButton
          aria-label="open navigation menu"
          onClick={() => setOpen(true)}
          sx={{ display: { xs: 'inline-flex', lg: 'none' }, color: theme => theme.palette.text.white }}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          anchor="right"
          open={open}
          onClose={closeDrawer}
          sx={{ display: { xs: 'block', lg: 'none' } }}
          slotProps={{
            paper: {
              elevation: 0,
              square: true,
              sx: {
                backgroundColor: theme.palette.portfolioGreen.background,
                color: theme.palette.primary.main,
                width: '300px',
              }
            }
          }}

        >
          <List sx={{ mt: 2, "& a": { color: '#fff', textDecoration: 'none' } }}>
            {navLinks.map((item) => (
              <ListItem key={item.to} onClick={closeDrawer}>
                <Link to={item.to}>
                  <ListItemText primary={item.label} />
                </Link>
              </ListItem>
            ))}
          </List>
        </Drawer>

        <Box sx={{
          display: { xs: 'none', lg: 'block' },
          "& a": {
            textDecoration: "none",
            color: "#fff"
          },
          "& a:hover": {
            textDecoration: "underline",
            color: theme.palette.primary.main
          }
        }}>
          <Stack direction="row" spacing={2}>
            {navLinks.map((item) => (
              <Link key={item.to} to={item.to}>
                <Typography title={item.label} variant="body1">{item.label}</Typography>
              </Link>
            ))}
          </Stack>
        </Box>
      </Toolbar>
    </AppBar >
  )
}

export default Header
