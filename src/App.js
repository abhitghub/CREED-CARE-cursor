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
            main: '#FFB800',
            dark: '#E6A500',
            light: '#FFD54F',
          },
          secondary: {
            main: '#FFA000',
            dark: '#FF8F00',
            light: '#FFB74D',
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
            main: '#FFD700',
            dark: '#FFB800',
            light: '#FFE57F',
          },
          secondary: {
            main: '#FFC107',
            dark: '#FFB300',
            light: '#FFD54F',
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
    },
    MuiButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            boxShadow: mode === 'dark' 
              ? '0 6px 20px rgba(255, 215, 0, 0.3)'
              : '0 6px 20px rgba(255, 184, 0, 0.3)',
          }
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