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
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/context/AuthContext.jsx";

const pages = [
  { title: "Visão Geral", path: "/overview" },
  { title: "Lançamentos", path: "/transactions" },
  { title: "Metas", path: "/financial-goal" },
  { title: "Open Finance", path: "/open-finance" },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

export default function Appbar() {
  //vairáiveis de controle de autenticacao
  const { logout } = useAuth();

  const navigate = useNavigate();
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

  const handleNavigate = (path) => {
    navigate(path);
    handleCloseNavMenu();
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
              <MenuItem
                key={page.title}
                onClick={() => handleNavigate(page.path)}
                dense
              >
                <Typography variant="body2" sx={{ textAlign: "center" }}>
                  {page.title}
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
              gap: 0.5,
            }}
          >

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
                key={page.title}
                onClick={() => navigate(page.path)}
                sx={{
                  color: "white",
                  display: "block",
                  py: 0.5,
                  px: 1.5,
                  minWidth: "auto",
                  fontSize: "0.875rem",
                  fontWeight: "bold",
                  textTransform: "none",
                  borderRadius: "8px",
                  transition: "background-color 0.3s ease", // suaviza a transição
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.2)", // fundo claro no hover
                  },
                }}
              >
                {page.title}
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
            <Tooltip title="Logout">
              <IconButton
                size="big"
                onClick={() => {
                  logout();
                  navigate("/login");
                }}
              >
                <LogoutIcon sx={{ color: "white" }} />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
