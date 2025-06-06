import React from 'react';
import { Box, Container, Typography, Grid, Paper, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import GroupsIcon from '@mui/icons-material/Groups';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonIcon from '@mui/icons-material/Person';
import PeopleIcon from '@mui/icons-material/People';
import DevicesIcon from '@mui/icons-material/Devices';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[4],
  },
  background: theme.palette.mode === 'dark' 
    ? 'rgba(45, 45, 45, 0.85)' 
    : 'rgba(255, 255, 255, 0.9)',
  backdropFilter: 'blur(10px)',
  borderRadius: '15px',
  border: `1px solid ${theme.palette.mode === 'dark' 
    ? 'rgba(255,255,255,0.1)' 
    : 'rgba(0,0,0,0.1)'}`,
}));

const FeatureIcon = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  color: theme.palette.primary.main,
  '& > svg': {
    fontSize: '2.5rem',
  },
}));

const features = [
  {
    title: 'Medical Supervision',
    description: 'Expert medical professionals monitoring your progress',
    icon: <MedicalServicesIcon />,
  },
  {
    title: 'Comprehensive Care',
    description: 'Holistic approach to health and wellness',
    icon: <HealthAndSafetyIcon />,
  },
  {
    title: 'Expert Guidance',
    description: 'Professional advice from industry experts',
    icon: <EmojiObjectsIcon />,
  },
  {
    title: 'Results Driven',
    description: 'Focus on achieving measurable outcomes',
    icon: <TrendingUpIcon />,
  },
  {
    title: '24/7 Support & Teleconsultation',
    description: 'Round-the-clock assistance and virtual consultations',
    icon: <SupportAgentIcon />,
  },
  {
    title: 'Kickoff Workshop',
    description: 'Intensive initial session to set you up for success',
    icon: <GroupsIcon />,
  },
  {
    title: 'Monthly Wellness Modules',
    description: 'Regular educational content and activities',
    icon: <CalendarMonthIcon />,
  },
  {
    title: 'Personalized Health-Care',
    description: 'Tailored programs for your specific needs',
    icon: <PersonIcon />,
  },
  {
    title: 'Peer Support Circles',
    description: 'Connect and grow with like-minded individuals',
    icon: <PeopleIcon />,
  },
  {
    title: 'Access to Digital Tools',
    description: 'Cutting-edge technology for tracking and improvement',
    icon: <DevicesIcon />,
  },
];

const WhatMakesUsApart = () => {
  const theme = useTheme();
  
  return (
    <Box
      id="what-makes-us-apart"
      py={8}
      sx={{
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url("/apart.jpeg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: theme.palette.mode === 'dark' ? 0.6 : 0.5,
          zIndex: 0
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: theme.palette.mode === 'dark'
            ? 'linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.75) 100%)'
            : 'linear-gradient(180deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.75) 100%)',
          zIndex: 0
        }
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Typography
          variant="h2"
          component="h2"
          align="center"
          gutterBottom
          sx={{
            mb: 6,
            fontWeight: 700,
            fontSize: { xs: '2rem', md: '3rem' },
            position: 'relative',
            '&::after': {
              content: '""',
              display: 'block',
              width: '100px',
              height: '4px',
              background: (theme) => theme.palette.primary.main,
              margin: '16px auto',
              borderRadius: '2px',
            },
          }}
        >
          What Makes Us Apart
        </Typography>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <StyledPaper 
                elevation={1}
                sx={{
                  background: theme.palette.mode === 'dark' 
                    ? 'rgba(45, 45, 45, 0.75)' 
                    : 'rgba(255, 255, 255, 0.85)',
                  backdropFilter: 'blur(8px)',
                  border: `1px solid ${theme.palette.mode === 'dark' 
                    ? 'rgba(255,255,255,0.15)' 
                    : 'rgba(0,0,0,0.1)'}`,
                  boxShadow: theme.palette.mode === 'dark'
                    ? '0 8px 32px rgba(0,0,0,0.3)'
                    : '0 8px 32px rgba(0,0,0,0.1)',
                }}
              >
                <FeatureIcon>{feature.icon}</FeatureIcon>
                <Typography 
                  variant="h6" 
                  component="h3" 
                  gutterBottom 
                  sx={{ 
                    fontWeight: 600,
                    color: theme.palette.mode === 'dark' 
                      ? 'rgba(255,255,255,0.95)'
                      : theme.palette.text.primary
                  }}
                >
                  {feature.title}
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{
                    color: theme.palette.mode === 'dark'
                      ? 'rgba(255,255,255,0.8)'
                      : theme.palette.text.secondary
                  }}
                >
                  {feature.description}
                </Typography>
              </StyledPaper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default WhatMakesUsApart; 