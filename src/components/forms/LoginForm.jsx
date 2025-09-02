import { AccountCircle, Lock, Login } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  InputAdornment,
  Link,
  Stack,
  CircularProgress,
  Alert,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/axiosConfig.js";
import React from "react";

export default function LoginForm() {

  //variáveis de controle para o login
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState("");
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    console.log("Entrou no método");
    console.log(email, password);

    api
      .post("/auth/login", { email, password }, {withCredentials: true})
      .then((response) => {
        console.log("Login OK", response.data);
        navigate("/overview")
      })
      .catch((err) => {
        setError(
          err.response?.data?.message ||
            "Credenciais inválidas ou desabilitadas"
        );
      })
      .finally(() => setLoading(false));
  };

  return (
    <>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          alignSelf: "center",
          gap: "40px",
          padding: "60px",
          width: "100%",
          maxWidth: "450px",
          borderRadius: "20px",
        }}
        elevation={4}
      >
        <Typography
          sx={{ fontWeight: "bold", textAlign: "center" }}
          component="h1"
          variant="h4"
          color="secondary"
        >
          Bem vindo de volta!
        </Typography>
        <Divider />
        <Box
          sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
          component="form"
          noValidate
          onSubmit={handleSubmit}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <TextField
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                },
              }}
              fullWidth
              label="E-mail"
              placeholder="fulano@dominio.com"
              size="small"
              onChange={(e) => setEmail(e.target.value)}
            ></TextField>
            <TextField
              type="password"
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <Lock />
                    </InputAdornment>
                  ),
                },
              }}
              fullWidth
              placeholder="********"
              label="Senha"
              size="small"
              onChange={(e) => setPassword(e.target.value)}
            ></TextField>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "end", margin: "0" }}>
            <Link
              color="secondary"
              variant="body1"
              href="/cadastro"
              underline="always"
            >
              Esqueci minha senha
            </Link>
          </Box>
          <Divider />
          <Box>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox />}
                label="Lembre de mim"
              ></FormControlLabel>
            </FormGroup>
          </Box>
          <Stack sx={{ gap: "10px", display: "flex" }}>
            <Button
              color="primary"
              sx={{ borderRadius: "10px" }}
              size="large"
              variant="contained"
              fullWidth
              type="submit"
              disabled={loading}
              startIcon={
                loading ? <CircularProgress size={20} color="inherit" /> : null
              }
            >
              {loading ? "Entrando..." : "Entrar"}
            </Button>
          </Stack>
          <Box sx={{ display: "flex", justifyContent: "center", margin: "0" }}>
            <Link
              color="secondary"
              variant="body1"
              href="/register"
              underline="always"
            >
              Cadastrar-se
            </Link>
          </Box>
        </Box>
      </Card>
    </>
  );
}
