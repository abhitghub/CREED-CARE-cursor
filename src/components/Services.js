import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  useTheme,
} from '@mui/material';
import ElderlyIcon from '@mui/icons-material/Elderly';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import PregnantWomanIcon from '@mui/icons-material/PregnantWoman';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

const serviceCategories = [
  {
    title: 'Medical Nutrition',
    icon: <LocalHospitalIcon sx={{ fontSize: 40 }} />,
    description: 'Specialized nutrition plans based on medical conditions and doctor recommendations.',
    subcategories: ['Doctor Consultation', 'Personalized Diet Plans', 'Regular Monitoring']
  },
  {
    title: 'Diabetics Care',
    icon: <MonitorHeartIcon sx={{ fontSize: 40 }} />,
    description: 'Comprehensive pre and post diabetic nutrition management and monitoring.',
    subcategories: ['Pre-diabetic Care', 'Post-diabetic Management', 'Blood Sugar Monitoring']
  },
  {
    title: 'Children Nutrition',
    icon: <ChildCareIcon sx={{ fontSize: 40 }} />,
    description: 'Age-appropriate nutrition plans for children, including sports and special needs.',
    subcategories: ['Growth Monitoring', 'Sports Nutrition', 'Special Requirements']
  },
  {
    title: 'Elder Care',
    icon: <ElderlyIcon sx={{ fontSize: 40 }} />,
    description: 'Specialized nutrition plans for elderly, focusing on their unique dietary needs.',
    subcategories: ['Age-specific Plans', 'Health Maintenance', 'Dietary Restrictions']
  },
  {
    title: 'Fertility Support',
    icon: <PregnantWomanIcon sx={{ fontSize: 40 }} />,
    description: 'Nutrition support for pre-pregnancy, pregnancy, and post-pregnancy phases.',
    subcategories: ['Pre-pregnancy Care', 'Pregnancy Diet', 'Post-pregnancy Recovery']
  },
  {
    title: 'Sports Nutrition',
    icon: <FitnessCenterIcon sx={{ fontSize: 40 }} />,
    description: 'Specialized nutrition plans for athletes and fitness enthusiasts.',
    subcategories: ['Performance Enhancement', 'Recovery Plans', 'Competition Prep']
  }
];

const ServiceCard = ({ title, icon, description, subcategories }) => {
  const theme = useTheme();
  
  return (
    <Card 
      sx={{ 
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: theme.shadows[8],
        },
        borderRadius: 2,
      }}
    >
      <CardContent>
        <Box 
          sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            mb: 2,
            color: theme.palette.primary.main 
          }}
        >
          {icon}
          <Typography variant="h6" component="h3" sx={{ ml: 1 }}>
            {title}
          </Typography>
        </Box>
        <Typography variant="body2" color="text.secondary" paragraph>
          {description}
        </Typography>
        <Box sx={{ mt: 2 }}>
          {subcategories.map((subcategory, index) => (
            <Typography 
              key={index} 
              variant="body2" 
              sx={{ 
                color: theme.palette.text.secondary,
                display: 'flex',
                alignItems: 'center',
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
            >
              {subcategory}
            </Typography>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

const Services = () => {
  const theme = useTheme();

  return (
    <Box 
      id="services" 
      sx={{ 
        py: 8,
        backgroundColor: theme.palette.mode === 'dark' 
          ? 'background.default' 
          : 'grey.50'
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ mb: 8, textAlign: 'center' }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              mb: 2,
              fontWeight: 700,
              fontSize: { xs: '2rem', md: '2.5rem' }
            }}
          >
            Our Nutrition Services
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{
              maxWidth: '800px',
              mx: 'auto',
              mb: 4
            }}
          >
            Comprehensive nutrition management tailored to your unique needs
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {serviceCategories.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <ServiceCard {...service} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services; 