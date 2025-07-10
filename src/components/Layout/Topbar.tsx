// src/components/Layout/Topbar.tsx
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

interface TopbarProps {
  handleDrawerToggle: () => void;
}

const Topbar = ({ handleDrawerToggle }: TopbarProps) => {
  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          Sistema de Ventas
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;