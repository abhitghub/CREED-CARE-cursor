import React from 'react';
import { useTheme } from '@mui/material';

const ContactSVG = () => {
  const theme = useTheme();
  const primaryColor = theme.palette.primary.main;
  const secondaryColor = theme.palette.mode === 'dark' ? '#ffffff' : '#2c3e50';

  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 800 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        maxHeight: '400px',
        opacity: theme.palette.mode === 'dark' ? 0.9 : 1
      }}
    >
      <path
        d="M400 50C184.315 50 10 224.315 10 440C10 655.685 184.315 830 400 830"
        stroke={primaryColor}
        strokeWidth="20"
        strokeLinecap="round"
        strokeDasharray="20 40"
      />
      <circle
        cx="400"
        cy="300"
        r="150"
        fill="none"
        stroke={secondaryColor}
        strokeWidth="15"
        strokeDasharray="30 15"
      />
      <path
        d="M400 150L450 250L400 350L350 250L400 150Z"
        fill={primaryColor}
      />
      <circle
        cx="400"
        cy="300"
        r="30"
        fill={secondaryColor}
      />
      <path
        d="M500 200C500 144.772 455.228 100 400 100"
        stroke={primaryColor}
        strokeWidth="15"
        strokeLinecap="round"
      />
      <path
        d="M300 400C355.228 400 400 355.228 400 300"
        stroke={secondaryColor}
        strokeWidth="15"
        strokeLinecap="round"
      />
      <circle
        cx="400"
        cy="300"
        r="200"
        stroke={primaryColor}
        strokeWidth="2"
        strokeDasharray="10 10"
      />
    </svg>
  );
};

export default ContactSVG; 