import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Box,
  useTheme,
  Stack,
  Menu,
  MenuItem,
  useMediaQuery,
  Typography
} from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.background.paper : '#ffffff',
  boxShadow: 'none',
  borderBottom: `1px solid ${theme.palette.divider}`,
  padding: theme.spacing(1, 0),
}));

const LogoContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  '& img': {
    height: '45px',
    objectFit: 'contain'
  }
}));

const NavButton = styled(Button)(({ theme }) => ({
  textTransform: 'none',
  fontSize: '1rem',
  padding: '8px 16px',
  color: theme.palette.text.primary,
  '&:hover': {
    backgroundColor: theme.palette.mode === 'dark' 
      ? 'rgba(255, 255, 255, 0.05)'
      : 'rgba(0, 0, 0, 0.05)',
  },
}));

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = ({ toggleColorMode }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileMenuAnchor, setMobileMenuAnchor] = useState(null);

  const handleMobileMenuOpen = (event) => {
    setMobileMenuAnchor(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuAnchor(null);
  };

  return (
    <StyledAppBar position="sticky">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Logo Section */}
        <LogoContainer>
          <Box 
            component="a" 
            href="/"
            sx={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              color: 'inherit'
            }}
          >
            <img 
              src={theme.palette.mode === 'dark' ? "/logo-removebg-preview.png" : "/logo.jpg"}
              alt="Creed Care" 
              style={{
                maxWidth: '200px',
                height: 'auto',
                marginRight: '16px'
              }}
            />
          </Box>
        </LogoContainer>

        {/* Navigation Items */}
        {isMobile ? (
          <>
            <IconButton
              color="inherit"
              aria-label="menu"
              onClick={handleMobileMenuOpen}
              sx={{ ml: 'auto', mr: 1 }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={mobileMenuAnchor}
              open={Boolean(mobileMenuAnchor)}
              onClose={handleMobileMenuClose}
              PaperProps={{
                sx: {
                  mt: 1.5,
                  width: 200,
                },
              }}
            >
              {navItems.map((item) => (
                <MenuItem 
                  key={item.label} 
                  onClick={handleMobileMenuClose}
                  component="a"
                  href={item.href}
                >
                  {item.label}
                </MenuItem>
              ))}
            </Menu>
          </>
        ) : (
          <Stack 
            direction="row" 
            spacing={2}
            sx={{ 
              flexGrow: 1,
              justifyContent: 'center'
            }}
          >
            {navItems.map((item) => (
              <NavButton
                key={item.label}
                href={item.href}
              >
                {item.label}
              </NavButton>
            ))}
          </Stack>
        )}

        {/* Right Section */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <IconButton 
            onClick={toggleColorMode} 
            color="primary"
          >
            {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
          
          <Button 
            variant="outlined" 
            color="primary"
            sx={{
              borderRadius: '20px',
              px: 3,
              textTransform: 'none',
              '&:hover': {
                backgroundColor: theme.palette.primary.main,
                color: '#fff'
              }
            }}
          >
            Sign In
          </Button>
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Navbar; 