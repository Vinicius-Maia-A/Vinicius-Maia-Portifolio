import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00FF00',
      // light: will be calculated from palette.primary.main,
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    text: {
      primary: '#00FF00',
      secondary: '#00CC00',
      white: '#FFFFFF',
    },
    portfolioGreen: {
      primary: '#00FF00',
      primaryDim: '#00CC00',
      primaryDark: '#003300',
      background: '#050A05',
      surface: '#0A140A',
    }
  },

  typography: {
    fontFamily: 'jetbrains mono, Space Grotesk, Arial, sans-serif',
    h1: { fontFamily: 'Space Grotesk, jetbrains mono, sans-serif', fontSize: 48, lineHeight: 1, fontWeight: '600' },
    h2: { fontFamily: 'Space Grotesk, jetbrains mono, sans-serif', fontSize: 40, lineHeight: 1, fontWeight: '600' },
    h3: { fontFamily: 'Space Grotesk, jetbrains mono, sans-serif', fontSize: 32, lineHeight: 1, fontWeight: '600' },
    h4: { fontFamily: 'Space Grotesk, jetbrains mono, sans-serif', fontSize: 24, lineHeight: 1, fontWeight: '600' },
    h5: { fontFamily: 'Space Grotesk, jetbrains mono, sans-serif', fontSize: 20, lineHeight: 1, fontWeight: '400' },
    h6: { fontFamily: 'Space Grotesk, jetbrains mono, sans-serif', fontWeight: '400' },
    body1: {
      fontFamily: 'jetbrains mono, Space Grotesk, sans-serif',
      fontSize: 12,
      fontWeight: '400',
      '@media (min-width:1200px)': {
        fontSize: 14,
      },
    },
    body2: {
      fontFamily: 'jetbrains mono, Space Grotesk, sans-serif',
      fontSize: 12,
      fontWeight: '200',
      '@media (min-width:1200px)': {
        fontSize: 14,
      },
    },
  }
});
