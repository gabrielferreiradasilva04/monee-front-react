import React from "react";
import {
  Box,
  Button,
  Card,
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  Switch,
  TextField,
  Link,
  Typography,
} from "@mui/material";
import { useState } from "react";


export default function RegisterForm() {

  //variáveis para o cadastro do usuário
  //Json padrão:
  /**
   * {
    "name": "Gabriel Ferreira da Silva",
    "email": "gabrielferreirasilva@gmail.com",
    "password": "123456",
    "phone": "(41) 996241805",
    "userRole": "ADMINISTRATOR"
    }
   */

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const userRole = "COMMON";

  return (
    <>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          alignSelf: "center",
          gap: "15px",
          padding: "60px",
          width: "100%",
          maxWidth: "500px",
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
          Seja Bem Vindo!
        </Typography>
        <Divider />
        <Box
          sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
          component="form"
          noValidate
          onSubmit={null}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            <TextField
              id="reg-name"
              fullWidth
              size="small"
              label="Nome"
            ></TextField>

            <TextField
              id="reg-mail"
              fullWidth
              size="small"
              label="E-mail"
              type="email"
            ></TextField>

            <TextField
              id="reg-phone"
              fullWidth
              size="small"
              label="Telefone"
              type="text"
            ></TextField>

            <TextField
              id="reg-password"
              fullWidth
              size="small"
              label="Senha"
              type="password"
            ></TextField>
            <TextField
              id="reg-passwordrep"
              fullWidth
              size="small"
              label="Confirmar senha"
              type="password"
            ></TextField>
            <Box>
              <FormGroup
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <FormControlLabel
                  control={<Checkbox />}
                  label="Eu concordo com os"
                ></FormControlLabel>
                <Link>termos e condições</Link>
              </FormGroup>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Quero receber e-mails com atualizações"
                ></FormControlLabel>
              </FormGroup>
            </Box>
            <Divider />
            <Box sx={{ display: "block", justifyContent: "center" }}>
              <Button
                sx={{ borderRadius: "10px" }}
                size="large"
                fullWidth
                variant="contained"
              >
                Confirmar Cadastro
              </Button>
              <Box
                sx={{ display: "flex", justifyContent: "center", margin: "0" }}
              >
                <Link
                  color="secondary"
                  variant="body1"
                  href="/login"
                  underline="always"
                >
                  Já possuo uma conta
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
      </Card>
    </>
  );
}
