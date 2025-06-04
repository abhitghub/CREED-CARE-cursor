import React, { useState, useMemo } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';

const getDesignTokens = (mode) => ({
  typography: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    h2: {
      fontSize: '3rem',
      '@media (max-width:600px)': {
        fontSize: '2rem',
      },
    },
  },
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          primary: {
            main: '#27ae60',
            dark: '#219a52',
          },
          background: {
            default: '#f8fafc',
            paper: '#ffffff',
          },
          text: {
            primary: '#2c3e50',
            secondary: '#596677',
          },
        }
      : {
          primary: {
            main: '#2ecc71',
            dark: '#27ae60',
          },
          background: {
            default: '#1a1a1a',
            paper: '#2d2d2d',
          },
          text: {
            primary: '#ffffff',
            secondary: '#b3b3b3',
          },
        }),
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: 'none'
        }
      }
    }
  }
});

function App() {
  const [mode, setMode] = useState('light');

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ 
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <Navbar toggleColorMode={toggleColorMode} />
        <Box component="main" sx={{ flexGrow: 1 }}>
          <LandingPage />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App; 