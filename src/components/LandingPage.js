import React, { useState } from 'react';
import { 
  Container, 
  Typography, 
  Button, 
  Box,
  Paper,
  Grid,
  Card,
  CardContent,
  Stack,
  TextField,
  useTheme,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Link
} from '@mui/material';
import { styled } from '@mui/material/styles';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import FavoriteIcon from '@mui/icons-material/Favorite';
import TimelineIcon from '@mui/icons-material/Timeline';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Services from './Services';
import Logo from './Logo';
import WelcomeDialog from './WelcomeDialog';
import ChatBotButton from './ChatBotButton';
import WhatMakesUsApart from './WhatMakesUsApart';
import OurJourney from './OurJourney';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(8),
  background: theme.palette.mode === 'dark' 
    ? 'linear-gradient(to right bottom, #1a1a1a, #2d2d2d)'
    : 'linear-gradient(to right bottom, #ffffff, #f8f9fa)',
  borderRadius: '20px',
  boxShadow: theme.palette.mode === 'dark'
    ? '0 8px 32px rgba(0,0,0,0.3)'
    : '0 8px 32px rgba(0,0,0,0.1)',
}));

const FeatureCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(4),
  textAlign: 'center',
  background: theme.palette.mode === 'dark' 
    ? 'rgba(255,255,255,0.05)'
    : 'rgba(255,255,255,0.8)',
  backdropFilter: 'blur(10px)',
  borderRadius: '15px',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
  }
}));

const PricingCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(4),
  textAlign: 'center',
  background: theme.palette.mode === 'dark' 
    ? 'rgba(255,255,255,0.05)'
    : 'rgba(255,255,255,0.8)',
  backdropFilter: 'blur(10px)',
  borderRadius: '15px',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
  }
}));

const features = [
  {
    title: 'Customer Satisfaction',
    description: 'Our commitment to excellence ensures that every client receives personalized attention and achieves their wellness goals. With a 95% satisfaction rate, we take pride in transforming lives.',
    image: '/sub1.jpeg'
  },
  {
    title: 'Reliability',
    description: 'Trust in our team of certified nutritionists and proven methodologies. We maintain consistent quality in our services and are always there when you need guidance.',
    image: '/sub2.jpeg'
  },
  {
    title: 'Swift Service',
    description: 'Experience quick response times and immediate attention to your nutrition needs. Our efficient service ensures you get the support you need, when you need it.',
    image: '/sub3.jpeg'
  },
  {
    title: 'Personalized Meal Plans',
    description: 'Get customized nutrition plans tailored to your specific health goals and dietary requirements. Our meal plans fit your lifestyle while ensuring optimal nutrition.',
    image: '/mealplan.jpeg'
  },
  {
    title: 'Progress Tracking',
    description: 'Monitor your health journey with our advanced tracking tools and regular assessments. Stay motivated as you watch your progress and achieve your wellness goals.',
    image: '/progrress.jpeg'
  },
  {
    title: 'Expert Guidance',
    description: 'Receive support from certified nutritionists who are dedicated to your success. Our experts provide evidence-based guidance tailored to your unique needs.',
    image: '/expert.jpeg'
  }
];

const pricingPlans = [
  {
    title: 'Basic Plan',
    price: 'Free',
    period: '/month',
    features: [
      'Basic Meal Planning',
      'Diet Tips & Resources',
      'Email Support',
      'Community Access'
    ]
  },
  {
    title: 'Pro Plan',
    price: '₹599',
    period: '/month',
    features: [
      'Everything in Basic Plan',
      'Weekly Progress Reviews',
      'Priority Support',
      'Bi-weekly Consultations',
      'Custom Recipe Database',
      'Mobile App Access'
    ]
  },
  {
    title: 'Premium Plan',
    price: '₹1,999',
    period: '/month',
    features: [
      'Everything in Pro Plan',
      'Daily Check-ins',
      '24/7 Support Access',
      'Weekly Consultations',
      'Family Nutrition Planning',
      'Lifestyle Coaching',
      'Personalized Workout Plans'
    ]
  }
];

const LandingPage = () => {
  const theme = useTheme();
  const [welcomeOpen, setWelcomeOpen] = useState(true);

  const handleWelcomeClose = (data) => {
    setWelcomeOpen(false);
    // You can use the data (age and goal) to personalize the experience
    console.log('User data:', data);
  };

  return (
    <>
      <WelcomeDialog open={welcomeOpen} onClose={handleWelcomeClose} />
      <ChatBotButton />
      
      {/* Hero Section */}
      <Box sx={{ 
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url("/creed bg.jpeg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          opacity: theme.palette.mode === 'dark' ? 0.7 : 0.9,
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
            ? 'linear-gradient(45deg, rgba(0,0,0,0.6), rgba(0,0,0,0.4))'
            : 'linear-gradient(45deg, rgba(255,255,255,0.6), rgba(255,255,255,0.4))',
          zIndex: 1
        }
      }}>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Box py={8}>
            <StyledPaper elevation={0} sx={{
              background: 'transparent',
              backdropFilter: 'blur(10px)',
              boxShadow: 'none'
            }}>
              <Typography 
                variant="h2" 
                component="h1" 
                gutterBottom 
                align="center"
                sx={{ 
                  fontWeight: 700,
                  color: theme.palette.mode === 'dark' ? '#fff' : '#2c3e50',
                  mb: 4,
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  lineHeight: 1.2,
                  textShadow: theme.palette.mode === 'dark'
                    ? '2px 2px 4px rgba(0,0,0,0.3)'
                    : '2px 2px 4px rgba(255,255,255,0.3)'
                }}
              >
                Your Path to Nourishing
                <Box component="span" sx={{ 
                  color: theme.palette.primary.main,
                  display: 'block',
                  fontSize: { xs: '2.8rem', md: '4rem' },
                  fontWeight: 800
                }}>
                  Wellness Begins Here
                </Box>
              </Typography>

              <Typography 
                variant="h5" 
                align="center" 
                paragraph
                sx={{ 
                  maxWidth: '800px',
                  mx: 'auto',
                  lineHeight: 1.8,
                  mb: 6,
                  color: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.9)' : 'rgba(0,0,0,0.7)',
                  textShadow: theme.palette.mode === 'dark'
                    ? '1px 1px 2px rgba(0,0,0,0.2)'
                    : '1px 1px 2px rgba(255,255,255,0.2)',
                  backgroundColor: theme.palette.mode === 'dark'
                    ? 'rgba(0,0,0,0.3)'
                    : 'rgba(255,255,255,0.3)',
                  padding: 3,
                  borderRadius: 2,
                  backdropFilter: 'blur(5px)'
                }}
              >
                Welcome to Creed Care Services, where your journey to better health is as unique as you are. 
                We understand that nutrition needs vary with age and health conditions, which is why we've created 
                a personalized approach to help you thrive.
              </Typography>

              <Box 
                display="flex" 
                justifyContent="center"
                gap={2}
                mb={4}
                sx={{
                  '& .MuiButton-root': {
                    backdropFilter: 'blur(5px)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-3px)',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                    }
                  }
                }}
              >
                <Button 
                  variant="contained" 
                  size="large"
                  onClick={() => setWelcomeOpen(true)}
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    padding: '12px 32px',
                    borderRadius: '30px',
                    fontSize: '1.1rem',
                    textTransform: 'none',
                    '&:hover': {
                      backgroundColor: theme.palette.primary.dark
                    }
                  }}
                >
                  Start Your Wellness Journey
                </Button>
                <Button 
                  variant="outlined" 
                  size="large"
                  sx={{
                    padding: '12px 32px',
                    borderRadius: '30px',
                    fontSize: '1.1rem',
                    textTransform: 'none',
                  }}
                >
                  Learn More
                </Button>
              </Box>
            </StyledPaper>
          </Box>
        </Container>
      </Box>

      {/* About Section */}
      <Box
        id="about"
        sx={{
          position: 'relative',
          py: 12,
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: theme.palette.mode === 'dark' 
              ? 'url("/logo-dark.jpg")'
              : 'url("/logo-light.jpg")',
            backgroundSize: '100% auto',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: theme.palette.mode === 'dark' ? 0.4 : 0.3,
            zIndex: 0,
            transform: 'scale(0.95)',
            margin: 'auto'
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: theme.palette.mode === 'dark'
              ? 'linear-gradient(135deg, rgba(26, 26, 26, 0.85) 0%, rgba(45, 45, 45, 0.85) 100%)'
              : 'linear-gradient(135deg, rgba(248, 250, 252, 0.85) 0%, rgba(238, 242, 247, 0.85) 100%)',
            zIndex: 1
          }
        }}
      >
        <Container 
          maxWidth="lg" 
          sx={{ 
            position: 'relative',
            zIndex: 2
          }}
        >
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: '2rem', md: '2.5rem' },
                  mb: 4,
                  color: theme.palette.mode === 'dark' ? '#fff' : '#2c3e50',
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -10,
                    left: 0,
                    width: '60px',
                    height: '3px',
                    background: theme.palette.primary.main,
                    borderRadius: '2px'
                  }
                }}
              >
                About Creed Care
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  mb: 3,
                  color: theme.palette.primary.main,
                  fontWeight: 500
                }}
              >
                Your Partner in Nutritional Wellness
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mb: 4,
                  color: theme.palette.text.secondary,
                  lineHeight: 1.8,
                  backgroundColor: theme.palette.mode === 'dark' 
                    ? 'rgba(26, 26, 26, 0.8)'
                    : 'rgba(255, 255, 255, 0.8)',
                  padding: 2,
                  borderRadius: 1,
                  backdropFilter: 'blur(10px)'
                }}
              >
                At Creed Care Services, we are committed to revolutionizing nutritional wellness through 
                personalized care and evidence-based solutions. Our team of certified nutritionists and 
                healthcare experts brings together decades of experience to provide comprehensive nutrition 
                management that adapts to your unique lifestyle and health requirements.
              </Typography>
              <Box sx={{ 
                display: 'flex', 
                gap: 3, 
                flexWrap: 'wrap',
                '& > div': {
                  backgroundColor: theme.palette.mode === 'dark' 
                    ? 'rgba(26, 26, 26, 0.8)'
                    : 'rgba(255, 255, 255, 0.8)',
                  padding: 2,
                  borderRadius: 1,
                  backdropFilter: 'blur(10px)'
                }
              }}>
                <Box>
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 700,
                      color: theme.palette.primary.main,
                      mb: 1
                    }}
                  >
                    1000+
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Satisfied Clients
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 700,
                      color: theme.palette.primary.main,
                      mb: 1
                    }}
                  >
                    50+
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Certified Nutritionists
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 700,
                      color: theme.palette.primary.main,
                      mb: 1
                    }}
                  >
                    95%
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Client Success Rate
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  position: 'relative',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: -15,
                    left: -15,
                    right: 15,
                    bottom: 15,
                    border: `2px solid ${theme.palette.primary.main}`,
                    borderRadius: 2,
                    zIndex: 0
                  }
                }}
              >
                <Paper
                  sx={{
                    position: 'relative',
                    zIndex: 1,
                    p: 3,
                    borderRadius: 2,
                    backgroundColor: theme.palette.mode === 'dark' 
                      ? 'rgba(45, 45, 45, 0.85)'
                      : 'rgba(255, 255, 255, 0.85)',
                    backdropFilter: 'blur(10px)',
                    boxShadow: theme.palette.mode === 'dark'
                      ? '0 8px 32px rgba(0,0,0,0.3)'
                      : '0 8px 32px rgba(0,0,0,0.1)',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)'
                    }
                  }}
                >
                  <Typography variant="h6" gutterBottom color="primary">
                    Our Vision
                  </Typography>
                  <Typography 
                    variant="body1" 
                    paragraph
                    sx={{ 
                      color: theme.palette.text.secondary,
                      lineHeight: 1.8
                    }}
                  >
                    To be the leading force in transforming lives through personalized nutrition, making optimal health 
                    accessible to everyone through innovative, science-backed dietary solutions and compassionate care.
                  </Typography>
                  <Typography variant="h6" gutterBottom color="primary" sx={{ mt: 4 }}>
                    Our Values
                  </Typography>
                  <Typography 
                    variant="body1"
                    sx={{ 
                      color: theme.palette.text.secondary,
                      lineHeight: 1.8
                    }}
                  >
                    We believe in excellence, integrity, and innovation. Our approach combines cutting-edge nutritional 
                    science with empathetic care, ensuring each client receives a tailored experience that addresses 
                    their unique health journey and goals.
                  </Typography>
                </Paper>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Our Journey Section */}
      <OurJourney />

      {/* Services Section */}
      <Services />

      {/* Why Choose Us Section */}
      <Box 
        id="why-choose-us" 
        sx={{ 
          py: 12,
          backgroundColor: theme.palette.mode === 'dark' 
            ? 'background.paper' 
            : '#f8faf9',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '100%',
            background: theme.palette.mode === 'dark'
              ? 'linear-gradient(180deg, rgba(255, 215, 0, 0.05) 0%, rgba(255, 215, 0, 0) 100%)'
              : 'linear-gradient(180deg, rgba(255, 184, 0, 0.05) 0%, rgba(255, 184, 0, 0) 100%)',
            zIndex: 0
          }
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Typography 
            variant="h2" 
            align="center" 
            gutterBottom
            sx={{
              fontWeight: 700,
              fontSize: { xs: '2rem', md: '2.5rem' },
              mb: 2,
              background: theme.palette.mode === 'dark'
                ? 'linear-gradient(45deg, #FFD700, #FFB800)'
                : 'linear-gradient(45deg, #FFB800, #FFA000)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              textShadow: theme.palette.mode === 'dark'
                ? '0 2px 4px rgba(255, 215, 0, 0.2)'
                : '0 2px 4px rgba(255, 184, 0, 0.2)'
            }}
          >
            Why Choose Us
          </Typography>
          <Typography
            variant="h6"
            align="center"
            sx={{
              mb: 6,
              color: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.6)',
              maxWidth: '700px',
              mx: 'auto'
            }}
          >
            Experience excellence in nutrition care with our comprehensive services and dedicated team
          </Typography>
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Box
                  sx={{
                    textAlign: 'center',
                    height: '100%',
                    transition: 'all 0.3s ease-in-out',
                    background: theme.palette.mode === 'dark' 
                      ? 'linear-gradient(145deg, rgba(45,45,45,0.9), rgba(45,45,45,0.4))'
                      : 'linear-gradient(145deg, rgba(255,255,255,0.9), rgba(255,255,255,0.4))',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '20px',
                    padding: '20px',
                    border: `1px solid ${theme.palette.mode === 'dark' 
                      ? 'rgba(255,255,255,0.1)'
                      : 'rgba(0,0,0,0.1)'}`,
                    '&:hover': {
                      transform: 'translateY(-10px)',
                      boxShadow: theme.palette.mode === 'dark'
                        ? '0 20px 40px rgba(0,0,0,0.3)'
                        : '0 20px 40px rgba(39, 174, 96, 0.15)',
                      border: `1px solid ${theme.palette.primary.main}`,
                      '& img': {
                        transform: 'scale(1.05)',
                      }
                    }
                  }}
                >
                  <Box
                    sx={{
                      mb: 3,
                      overflow: 'hidden',
                      borderRadius: '15px',
                      '& img': {
                        width: '100%',
                        maxWidth: '300px',
                        height: '200px',
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease-in-out',
                        boxShadow: theme.palette.mode === 'dark'
                          ? '0 8px 32px rgba(0,0,0,0.3)'
                          : '0 8px 32px rgba(0,0,0,0.1)',
                      }
                    }}
                  >
                    <img src={feature.image} alt={feature.title} />
                  </Box>
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{
                      fontWeight: 600,
                      color: theme.palette.primary.main,
                      position: 'relative',
                      display: 'inline-block',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: -4,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '40px',
                        height: '2px',
                        backgroundColor: theme.palette.primary.main,
                        transition: 'width 0.3s ease',
                      },
                      '&:hover::after': {
                        width: '60px',
                      }
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ 
                      lineHeight: 1.8,
                      color: theme.palette.mode === 'dark' 
                        ? 'rgba(255,255,255,0.8)' 
                        : 'rgba(0,0,0,0.7)',
                      mt: 2
                    }}
                  >
                    {feature.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* What Makes Us Apart Section */}
      <WhatMakesUsApart />

      {/* Pricing Section */}
      <Box 
        id="pricing" 
        sx={{ 
          py: 8,
          backgroundColor: theme.palette.mode === 'dark' 
            ? 'background.paper' 
            : 'white',
          position: 'relative'
        }}
      >
        <Container maxWidth="lg">
          <Typography 
            variant="h2" 
            align="center" 
            gutterBottom
            sx={{
              fontWeight: 700,
              fontSize: { xs: '2rem', md: '2.5rem' },
              mb: 6
            }}
          >
            Pricing Plans
          </Typography>
          <Grid container spacing={4}>
            {pricingPlans.map((plan, index) => (
              <Grid item xs={12} md={4} key={index}>
                <PricingCard>
                  <Typography variant="h5" gutterBottom>
                    {plan.title}
                  </Typography>
                  <Typography 
                    variant="h3" 
                    color="primary"
                    sx={{ mb: 2 }}
                  >
                    {plan.price}
                    <Typography 
                      component="span" 
                      variant="subtitle1" 
                      color="text.secondary"
                    >
                      {plan.period}
                    </Typography>
                  </Typography>
                  <Box sx={{ flexGrow: 1 }}>
                    {plan.features.map((feature, idx) => (
                      <Typography 
                        key={idx} 
                        variant="body1" 
                        sx={{ 
                          py: 1,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          '&:before': {
                            content: '""',
                            width: '6px',
                            height: '6px',
                            backgroundColor: theme.palette.primary.main,
                            borderRadius: '50%',
                            display: 'inline-block',
                            marginRight: '8px'
                          }
                        }}
                        color="text.secondary"
                      >
                        {feature}
                      </Typography>
                    ))}
                  </Box>
                  <Button 
                    variant="contained" 
                    color="primary"
                    sx={{ 
                      mt: 3,
                      borderRadius: '20px',
                      textTransform: 'none',
                      py: 1.5
                    }}
                  >
                    Get Started
                  </Button>
                </PricingCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* FAQ Section */}
      <Box 
        id="faq" 
        sx={{ 
          py: 8,
          backgroundColor: theme.palette.mode === 'dark' 
            ? 'background.default' 
            : 'grey.50'
        }}
      >
        <Container maxWidth="lg">
          <Typography 
            variant="h2" 
            align="center" 
            gutterBottom
            sx={{
              fontWeight: 700,
              fontSize: { xs: '2rem', md: '2.5rem' },
              mb: 6
            }}
          >
            Frequently Asked Questions
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} md={8}>
              <Box sx={{ 
                '& .MuiAccordion-root': {
                  backgroundColor: theme.palette.mode === 'dark' 
                    ? 'background.paper' 
                    : 'white',
                  mb: 2,
                  borderRadius: '8px',
                  '&:before': {
                    display: 'none',
                  },
                  boxShadow: theme.palette.mode === 'dark'
                    ? '0 4px 6px rgba(0,0,0,0.2)'
                    : '0 4px 6px rgba(0,0,0,0.1)'
                }
              }}>
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="h6">What services does Creed Care provide?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Creed Care offers comprehensive nutrition services including personalized meal planning, 
                      medical nutrition therapy, diabetic care, children's nutrition, elder care, fertility support, 
                      and sports nutrition. Each service is tailored to meet your specific health goals and requirements.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="h6">How do I get started with a nutrition plan?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Getting started is easy! Simply choose a plan that suits your needs and schedule an initial 
                      consultation. During this session, we'll assess your current health status, discuss your goals, 
                      and create a personalized nutrition plan that works for you.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="h6">Do you offer virtual consultations?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Yes! We offer both in-person and virtual consultations to accommodate your schedule and 
                      preferences. Our virtual sessions are conducted through secure platforms and provide the 
                      same level of personalized care as our in-person visits.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="h6">How often will I meet with my nutritionist?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Meeting frequency varies based on your chosen plan and individual needs. Basic plans include 
                      monthly consultations, while Premium plans offer weekly check-ins. We'll work together to 
                      determine the optimal frequency for your success.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="h6">Can you accommodate special dietary requirements?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Absolutely! Our nutritionists are experienced in creating meal plans for various dietary 
                      requirements, including vegetarian, vegan, gluten-free, and allergy-specific diets. We ensure 
                      your nutrition plan aligns with both your health needs and dietary preferences.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="h6">What payment methods do you accept?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      We accept all major credit cards, debit cards, and digital payment methods. Some insurance 
                      plans may cover our services - we recommend checking with your insurance provider regarding 
                      coverage for medical nutrition therapy.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box 
        id="contact" 
        sx={{ 
          py: 12,
          position: 'relative',
          minHeight: '80vh',
          display: 'flex',
          alignItems: 'center',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'url("/contact.jpeg")',
            backgroundSize: '100% auto',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: theme.palette.mode === 'dark' ? 0.5 : 0.4,
            zIndex: 0,
            transform: 'scale(0.95)',
            margin: 'auto'
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: theme.palette.mode === 'dark'
              ? 'linear-gradient(135deg, rgba(26, 26, 26, 0.75) 0%, rgba(45, 45, 45, 0.75) 100%)'
              : 'linear-gradient(135deg, rgba(248, 250, 252, 0.75) 0%, rgba(238, 242, 247, 0.75) 100%)',
            zIndex: 1
          }
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box sx={{
                backgroundColor: theme.palette.mode === 'dark' 
                  ? 'rgba(26, 26, 26, 0.6)' 
                  : 'rgba(255, 255, 255, 0.6)',
                backdropFilter: 'blur(10px)',
                borderRadius: '20px',
                padding: 4,
                mb: { xs: 4, md: 0 },
                boxShadow: theme.palette.mode === 'dark'
                  ? '0 8px 32px rgba(0,0,0,0.3)'
                  : '0 8px 32px rgba(0,0,0,0.1)',
              }}>
                <Typography 
                  variant="h2"
                  sx={{
                    fontWeight: 700,
                    fontSize: { xs: '2.5rem', md: '3rem' },
                    mb: 3,
                    background: theme.palette.mode === 'dark'
                      ? 'linear-gradient(45deg, #FFD700, #FFA000)'
                      : 'linear-gradient(45deg, #FFB800, #FF8C00)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                    lineHeight: 1.2
                  }}
                >
                  Because every step you take toward health is worth it
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    color: theme.palette.mode === 'dark' 
                      ? 'rgba(255, 255, 255, 0.8)' 
                      : 'rgba(0, 0, 0, 0.7)',
                    mb: 4,
                    lineHeight: 1.6
                  }}
                >
                  Let us help you make those steps count. Get in touch with our expert team today.
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    gap: 2,
                    flexWrap: 'wrap',
                    '& svg': {
                      fontSize: '2rem',
                      color: theme.palette.mode === 'dark' ? '#FFD700' : '#FFB800'
                    }
                  }}
                >
                  <Box display="flex" alignItems="center" gap={2}>
                    <EmailIcon />
                    <Typography>support@creedcare.com</Typography>
                  </Box>
                  <Box display="flex" alignItems="center" gap={2}>
                    <PhoneIcon />
                    <Typography>+1 (555) 123-4567</Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ 
                backgroundColor: theme.palette.mode === 'dark' 
                  ? 'rgba(26, 26, 26, 0.6)' 
                  : 'rgba(255, 255, 255, 0.6)',
                backdropFilter: 'blur(10px)',
                borderRadius: '20px',
                padding: 4,
                boxShadow: theme.palette.mode === 'dark'
                  ? '0 8px 32px rgba(0,0,0,0.3)'
                  : '0 8px 32px rgba(0,0,0,0.1)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}>
                <Box
                  sx={{
                    width: '100%',
                    maxWidth: '400px',
                    mb: 4,
                    '& img': {
                      width: '100%',
                      height: 'auto',
                      filter: theme.palette.mode === 'dark' ? 'brightness(0.9)' : 'none'
                    }
                  }}
                >
                  <img src="/contact.svg" alt="Contact Illustration" />
                </Box>
                <Box
                  component="form"
                  sx={{
                    width: '100%',
                    '& .MuiTextField-root': {
                      mb: 3,
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: 'rgba(255, 184, 0, 0.3)',
                        },
                        '&:hover fieldset': {
                          borderColor: 'rgba(255, 184, 0, 0.5)',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#FFB800',
                        },
                        backgroundColor: theme.palette.mode === 'dark' 
                          ? 'rgba(45, 45, 45, 0.9)'
                          : 'rgba(255, 255, 255, 0.9)',
                        backdropFilter: 'blur(10px)',
                      },
                      '& .MuiInputLabel-root': {
                        color: theme.palette.mode === 'dark' 
                          ? 'rgba(255, 255, 255, 0.7)'
                          : 'rgba(0, 0, 0, 0.7)',
                      },
                    }
                  }}
                >
                  <TextField
                    label="Name"
                    variant="outlined"
                    fullWidth
                    required
                  />
                  <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    required
                    type="email"
                  />
                  <TextField
                    label="Message"
                    variant="outlined"
                    multiline
                    rows={4}
                    fullWidth
                    required
                  />
                  <Button 
                    variant="contained" 
                    fullWidth
                    size="large"
                    sx={{
                      mt: 2,
                      py: 1.5,
                      borderRadius: '50px',
                      background: 'linear-gradient(45deg, #FFD700, #FFA000)',
                      textTransform: 'none',
                      fontSize: '1.1rem',
                      fontWeight: 500,
                      boxShadow: '0 4px 20px rgba(255, 184, 0, 0.25)',
                      '&:hover': {
                        background: 'linear-gradient(45deg, #FFB800, #FF8C00)',
                        boxShadow: '0 6px 25px rgba(255, 184, 0, 0.35)',
                        transform: 'translateY(-2px)',
                      },
                      transition: 'all 0.3s ease'
                    }}
                  >
                    Send Message
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          py: 6,
          backgroundColor: theme.palette.mode === 'dark' 
            ? 'background.paper' 
            : 'grey.100',
          borderTop: `1px solid ${theme.palette.mode === 'dark' 
            ? 'rgba(255, 255, 255, 0.1)' 
            : 'rgba(0, 0, 0, 0.1)'}`
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom color="primary">
                Contact Information
              </Typography>
              <Stack spacing={2}>
                <Box display="flex" alignItems="center" gap={2}>
                  <EmailIcon color="primary" />
                  <Typography>support@creedcare.com</Typography>
                </Box>
                <Box display="flex" alignItems="center" gap={2}>
                  <PhoneIcon color="primary" />
                  <Typography>+1 (555) 123-4567</Typography>
                </Box>
                <Box display="flex" alignItems="center" gap={2}>
                  <LocationOnIcon color="primary" />
                  <Typography>123 Wellness Street, Health City, HC 12345</Typography>
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom color="primary">
                Quick Links
              </Typography>
              <Stack spacing={1}>
                <Link href="#about" color="inherit" underline="hover">About Us</Link>
                <Link href="#services" color="inherit" underline="hover">Services</Link>
                <Link href="#features" color="inherit" underline="hover">Features</Link>
                <Link href="#pricing" color="inherit" underline="hover">Pricing</Link>
                <Link href="#faq" color="inherit" underline="hover">FAQ</Link>
              </Stack>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom color="primary">
                Business Hours
              </Typography>
              <Typography paragraph>
                Monday - Friday: 9:00 AM - 6:00 PM<br />
                Saturday: 10:00 AM - 4:00 PM<br />
                Sunday: Closed
              </Typography>
              <Typography variant="h6" gutterBottom color="primary" sx={{ mt: 2 }}>
                Follow Us
              </Typography>
              <Stack direction="row" spacing={2}>
                {/* Add social media icons/links here */}
              </Stack>
            </Grid>
          </Grid>
          <Typography 
            variant="body2" 
            color="text.secondary" 
            align="center"
            sx={{ mt: 4, pt: 2, borderTop: 1, borderColor: 'divider' }}
          >
            © {new Date().getFullYear()} Creed Care Services. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </>
  );
};

export default LandingPage; 