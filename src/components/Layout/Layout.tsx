// src/components/Layout/Layout.tsx
import { useState, ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import { Box, CssBaseline } from '@mui/material';

const drawerWidth = 240;

interface LayoutProps {
  children?: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Topbar handleDrawerToggle={handleDrawerToggle} />
      <Sidebar mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
      <Box 
        component="main" 
        sx={{ 
          flexGrow: 1, 
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px)` },
        }}
      >
        {children || <Outlet />}
      </Box>
    </Box>
  );
};

export default Layout;