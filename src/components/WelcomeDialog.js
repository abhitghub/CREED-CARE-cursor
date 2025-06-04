import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  Typography,
  Box,
  Button,
  Card,
  CardContent,
  Fade,
  useTheme
} from '@mui/material';
import { motion } from 'framer-motion';

const ageGroups = [
  { label: 'Child (0-12)', value: 'child' },
  { label: 'Teen (13-19)', value: 'teen' },
  { label: 'Adult (20-50)', value: 'adult' },
  { label: 'Senior (50+)', value: 'senior' },
];

const goals = [
  { label: 'Weight Management', value: 'weight' },
  { label: 'Better Energy', value: 'energy' },
  { label: 'Health Conditions', value: 'health' },
  { label: 'Sports Nutrition', value: 'sports' },
];

const WelcomeDialog = ({ open, onClose }) => {
  const theme = useTheme();
  const [step, setStep] = useState(1);
  const [selectedAge, setSelectedAge] = useState(null);
  const [selectedGoal, setSelectedGoal] = useState(null);

  const handleAgeSelect = (age) => {
    setSelectedAge(age);
    setStep(2);
  };

  const handleGoalSelect = (goal) => {
    setSelectedGoal(goal);
    // Show success message before closing
    setTimeout(() => {
      onClose({ age: selectedAge, goal });
    }, 1500);
  };

  const OptionCard = ({ label, onClick }) => (
    <Card
      component={motion.div}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      sx={{
        cursor: 'pointer',
        mb: 2,
        background: 'linear-gradient(145deg, rgba(255,255,255,0.9), rgba(255,255,255,0.4))',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255,255,255,0.2)',
        transition: 'all 0.3s ease',
        '&:hover': {
          boxShadow: '0 8px 32px rgba(76, 175, 80, 0.15)',
          borderColor: theme.palette.primary.main,
        }
      }}
      onClick={onClick}
    >
      <CardContent>
        <Typography variant="h6" align="center">
          {label}
        </Typography>
      </CardContent>
    </Card>
  );

  return (
    <Dialog 
      open={open} 
      maxWidth="sm" 
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 4,
          background: 'linear-gradient(145deg, #f5f7fa, #ffffff)',
          boxShadow: '0 12px 48px rgba(0,0,0,0.1)',
        }
      }}
    >
      <DialogContent>
        <Box p={3}>
          <Fade in={step === 1}>
            <Box display={step === 1 ? 'block' : 'none'}>
              <Typography variant="h4" align="center" gutterBottom>
                Welcome to Creed Care! 👋
              </Typography>
              <Typography variant="body1" align="center" sx={{ mb: 4, color: 'text.secondary' }}>
                Let's start your journey to better health. What's your age group?
              </Typography>
              {ageGroups.map((age) => (
                <OptionCard
                  key={age.value}
                  label={age.label}
                  onClick={() => handleAgeSelect(age.value)}
                />
              ))}
            </Box>
          </Fade>

          <Fade in={step === 2}>
            <Box display={step === 2 ? 'block' : 'none'}>
              <Typography variant="h4" align="center" gutterBottom>
                Great choice! 🌟
              </Typography>
              <Typography variant="body1" align="center" sx={{ mb: 4, color: 'text.secondary' }}>
                What's your main nutrition goal today?
              </Typography>
              {goals.map((goal) => (
                <OptionCard
                  key={goal.value}
                  label={goal.label}
                  onClick={() => handleGoalSelect(goal.value)}
                />
              ))}
              <Button
                variant="text"
                fullWidth
                onClick={() => setStep(1)}
                sx={{ mt: 2 }}
              >
                ← Go back
              </Button>
            </Box>
          </Fade>

          {selectedGoal && (
            <Fade in={!!selectedGoal}>
              <Box textAlign="center" mt={2}>
                <Typography variant="h5" color="primary" gutterBottom>
                  You're doing great! 🎉
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  We're personalizing your experience...
                </Typography>
              </Box>
            </Fade>
          )}
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default WelcomeDialog; 