import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Box, Button, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu"

const pages = [
  "Visão Geral",
  "Lançamentos",
  "Limites de Gastos",
  "Metas Financeiras",
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

export default function Appbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
<AppBar position="static" sx={{ minHeight: '48px', }}>
  <Toolbar variant="dense" sx={{ minHeight: '48px !important', justifyContent:'center' }}>
    {/* Menu mobile */}
    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" }, alignItems: 'center' }}>
      <IconButton
        size="small"
        aria-label="menu"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="inherit"
        sx={{ p: 0.5 }}
      >
        <MenuIcon fontSize="small" />
      </IconButton>
      
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{ display: { xs: "block", md: "none" } }}
      >
        {pages.map((page) => (
          <MenuItem key={page} onClick={handleCloseNavMenu} dense>
            <Typography variant="body2" sx={{ textAlign: "center" }}>
              {page}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>

    {/* Menu para desktop */}
    <Box sx={{ 
      flexGrow: 1, 
      display: { xs: "none", md: "flex" },
      alignItems: 'center',
      justifyContent: 'center',
      gap: 1 
    }}>
      {pages.map((page) => (
        <Button
          key={page}
          onClick={handleCloseNavMenu}
          sx={{ 
            color: "white", 
            display: "block",
            py: 0.5,
            px: 1.5, 
            minWidth: 'auto',
            fontSize: '0.875rem',
            fontWeight: 'bold'
          }}
        >
          {page}
        </Button>
      ))}
    </Box>
  </Toolbar>
</AppBar>
  );
}
