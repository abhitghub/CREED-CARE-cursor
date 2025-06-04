import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const LogoContainer = styled(Box)(({ theme, scale = 1 }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: `${2 * scale}rem`,
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: `${200 * scale}px`,
    height: `${200 * scale}px`,
    background: theme.palette.mode === 'dark' 
      ? 'linear-gradient(135deg, #2ecc71, #27ae60)'
      : 'linear-gradient(135deg, #27ae60, #219a52)',
    borderRadius: '50%',
    opacity: 0.1,
    filter: 'blur(20px)',
  }
}));

const LogoText = styled(Typography)(({ theme, scale = 1 }) => ({
  fontSize: `${4 * scale}rem`,
  fontWeight: 800,
  background: theme.palette.mode === 'dark'
    ? 'linear-gradient(45deg, #2ecc71, #27ae60)'
    : 'linear-gradient(45deg, #27ae60, #219a52)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  color: 'transparent',
  textShadow: theme.palette.mode === 'dark'
    ? '0 2px 4px rgba(46, 204, 113, 0.2)'
    : '0 2px 4px rgba(39, 174, 96, 0.2)',
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-10px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '60%',
    height: `${4 * scale}px`,
    background: 'linear-gradient(90deg, transparent, #2ecc71, transparent)',
    borderRadius: '2px',
  }
}));

const SubText = styled(Typography)(({ theme, scale = 1 }) => ({
  fontSize: `${1.5 * scale}rem`,
  fontWeight: 500,
  color: theme.palette.mode === 'dark' ? '#ffffff' : '#2c3e50',
  marginTop: `${1.5 * scale}rem`,
  textAlign: 'center',
  opacity: 0.9,
  letterSpacing: '1px'
}));

const Logo = ({ scale = 1, className }) => {
  return (
    <LogoContainer scale={scale} className={className}>
      <Box
        sx={{
          position: 'relative',
          padding: `${2 * scale}rem`,
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            border: '2px solid',
            borderImage: 'linear-gradient(45deg, #2ecc71, #27ae60) 1',
            borderRadius: '10px',
            opacity: 0.3,
          }
        }}
      >
        <LogoText variant="h1" scale={scale}>
          CREED
        </LogoText>
        <SubText scale={scale}>
          CARE SERVICES
        </SubText>
      </Box>
    </LogoContainer>
  );
};

export default Logo; 