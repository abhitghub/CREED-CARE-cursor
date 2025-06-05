import React from 'react';
import { Box, Container, Typography, Paper, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import TimelineIcon from '@mui/icons-material/Timeline';
import GroupsIcon from '@mui/icons-material/Groups';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  height: '100%',
  background: theme.palette.mode === 'dark' 
    ? 'rgba(255, 255, 255, 0.05)' 
    : 'rgba(255, 255, 255, 0.9)',
  backdropFilter: 'blur(10px)',
  borderRadius: '20px',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[4],
  },
}));

const JourneyIcon = styled(Box)(({ theme }) => ({
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(2),
  '& > svg': {
    fontSize: '3rem',
  },
}));

const OurJourney = () => {
  return (
    <Box
      id="our-journey"
      py={8}
      sx={{
        position: 'relative',
        background: (theme) =>
          theme.palette.mode === 'dark'
            ? 'linear-gradient(180deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.9) 100%)'
            : 'linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,1) 100%)',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: (theme) => `url('/heartbeat.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.1,
          zIndex: 0,
        },
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
          Our Journey
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <StyledPaper elevation={1}>
              <JourneyIcon>
                <EmojiObjectsIcon />
              </JourneyIcon>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                The Beginning
              </Typography>
              <Typography variant="body1" color="text.secondary">
                What began in 2024 as a heartfelt idea has grown into a thriving wellness movement.
              </Typography>
            </StyledPaper>
          </Grid>

          <Grid item xs={12} md={4}>
            <StyledPaper elevation={1}>
              <JourneyIcon>
                <TimelineIcon />
              </JourneyIcon>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                Growth & Expansion
              </Typography>
              <Typography variant="body1" color="text.secondary">
                With the launch of our MVP in 2025 and over 100 early users onboarded, Creedcare is now expanding rapidly across Tamil Nadu and South India — transforming lives with personalized care, one person at a time.
              </Typography>
            </StyledPaper>
          </Grid>

          <Grid item xs={12} md={4}>
            <StyledPaper elevation={1}>
              <JourneyIcon>
                <GroupsIcon />
              </JourneyIcon>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                Our Vision
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Imagine waking up energized, not drained. At Creed.care, we understand the struggle to find balance in a busy world—because we've been there too. That's why we make self-care a shared journey, with interactive workshops, personalized plans, and a supportive community.
              </Typography>
            </StyledPaper>
          </Grid>
        </Grid>

        <Typography
          variant="h6"
          align="center"
          sx={{
            mt: 6,
            maxWidth: '800px',
            mx: 'auto',
            color: 'text.secondary',
            fontStyle: 'italic'
          }}
        >
          Join us to discover your best self, connect with others, and start a new, empowering chapter in your well-being.
        </Typography>
      </Container>
    </Box>
  );
};

export default OurJourney; 