import { Container, Grid } from "@mui/material"
import { Outlet } from "react-router"
import Header from "./components/Header"
import Footer from "./components/Footer"
function App() {

  return (
    <Grid container direction="column">
      <Container
        component="main"
        disableGutters
        maxWidth="xl"
        sx={{
          "&.MuiContainer-root": { px: { xs: 2, md: '40px' } },
        }}
      >
        <Grid container sx={{ mb: 12 }}>
          <Header />
          <Outlet />
        </Grid>
      </Container >
      <Footer />
    </Grid>
  )
}

export default App
