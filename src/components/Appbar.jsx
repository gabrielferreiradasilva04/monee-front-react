import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Box, Button, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import Tooltip from "@mui/material/Tooltip";
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

const pages = [
  "Visão Geral",
  "Lançamentos",
  "Limites de Gastos",
  "Metas",
  "Open Finance"
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
    <AppBar position="static" sx={{ minHeight: "48px" }}>
      <Toolbar
        variant="dense"
        sx={{ minHeight: "48px !important", justifyContent: "center" }}
      >
        {/* Menu mobile */}
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "flex", md: "none" },
            alignItems: "center",
          }}
        >
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
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: 0.5,
            }}
          >
            <IconButton>
              <SportsEsportsIcon sx={{ color: "white" }} />
            </IconButton>
            <IconButton>
              <NotificationsIcon sx={{ color: "white" }} />
            </IconButton>
          </Box>
        </Box>

        {/* Menu para desktop */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            flexDirection: "row",
            alignItems: "center",
            gap: 2,
            width: "100%",
          }}
        >
          <Box
            sx={{
              flex: 0.5,
              display: "flex",
              alignItems: "end",
              justifyContent: "flex-end",
            }}
          >
            <IconButton disabled>
              <MonetizationOnIcon />
            </IconButton>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: "white", // verde ou cor da sua identidade
                fontFamily: "'Poppins', sans-serif", // ou outra fonte mais estilizada
                letterSpacing: 0,
              }}
            >
              Monee
            </Typography>
          </Box>

          <Box
            sx={{
              flex: 2,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              gap: 1,
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  color: "white",
                  display: "block",
                  py: 0.5,
                  px: 1.5,
                  minWidth: "auto",
                  fontSize: "0.875rem",
                  fontWeight: "bold",
                  textTransform: "none",
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box
            sx={{
              flex: 0.5,
              display: "flex",
              justifyContent: "flex-start",
              gap: 0.5,
            }}
          >
            <Tooltip title="praticar">
              <IconButton size="big"> 
                <SportsEsportsIcon sx={{ color: "white" }} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Notificações">
              <IconButton size="big">
                <NotificationsIcon sx={{ color: "white" }} />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
