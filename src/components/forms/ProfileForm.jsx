import { Box, Button, Divider, TextField } from "@mui/material";
import React from "react";

export default function ProfileForm() {
  const handleSubmit = () => {};
  return (
    <>
      <Box
        sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
        component="form"
        noValidate
        onSubmit={handleSubmit}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <TextField
            id="profile-name"
            fullWidth
            size="small"
            label="Nome"
            disabled
            value={"Gabriel"}
          ></TextField>
          <TextField
            id="profile-email"
            fullWidth
            size="small"
            label="E-mail"
            disabled
            value={"fulano@fulano"}
          ></TextField>
          <TextField
            id="profile-phone"
            fullWidth
            size="small"
            label="Telefone / Celular"
            disabled
            value={"41999999"}
          ></TextField>
          <Divider />
          <Button
            variant="contained"
            sx={{
              color: "white",
              fontWeight: "bold",
              textTransform: "none",
              borderRadius: "8px"
            }}
          >
            Salvar Alterações
          </Button>
        </Box>
      </Box>
    </>
  );
}
