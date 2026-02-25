import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'
import Experiences from './pages/Experiences/Experiences.jsx'
import { theme } from './theme.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <StrictMode>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="experiences" element={<Experiences />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </StrictMode>
  </ThemeProvider>
)
