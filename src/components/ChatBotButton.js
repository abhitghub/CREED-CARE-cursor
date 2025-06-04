import React, { useState } from 'react';
import { Box, IconButton, Paper, Typography, Zoom } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import { motion } from 'framer-motion';

const ChatBotButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      component={motion.div}
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      sx={{
        position: 'fixed',
        bottom: 32,
        right: 32,
        left: 'auto',
        zIndex: 9999,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <IconButton
        sx={{
          backgroundColor: (theme) => theme.palette.primary.main,
          color: 'white',
          width: 60,
          height: 60,
          '&:hover': {
            backgroundColor: (theme) => theme.palette.primary.dark,
          },
          transition: 'all 0.3s ease',
          boxShadow: (theme) => `0 4px 20px ${theme.palette.primary.main}40`,
        }}
      >
        <ChatIcon sx={{ fontSize: 28 }} />
      </IconButton>

      <Zoom in={isHovered}>
        <Paper
          sx={{
            position: 'absolute',
            bottom: '100%',
            right: 0,
            left: 'auto',
            mb: 1,
            p: 1.5,
            borderRadius: 2,
            whiteSpace: 'nowrap',
            backgroundColor: (theme) => 
              theme.palette.mode === 'dark' 
                ? 'rgba(45, 45, 45, 0.9)'
                : 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(10px)',
            boxShadow: (theme) => 
              theme.palette.mode === 'dark'
                ? '0 8px 32px rgba(0,0,0,0.3)'
                : '0 8px 32px rgba(0,0,0,0.1)',
          }}
        >
          <Typography variant="body2" sx={{ fontWeight: 500 }}>
            Ask me anything! 👋
          </Typography>
        </Paper>
      </Zoom>
    </Box>
  );
};

export default ChatBotButton; 