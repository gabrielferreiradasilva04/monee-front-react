import React from "react";
import Appbar from "../components/Appbar";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <Appbar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start", // começa do topo, mas ainda centralizado horizontalmente
          alignItems: "center", // centraliza horizontalmente
          width: "100%",
          minHeight: "calc(100vh - 80px - 64px)", // altura total da tela menos AppBar e rodapé
          padding: "16px",
          marginTop: "80px",
        }}
      >
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "tween", restDelta: 0.5 }}
          style={{ width: "100%", maxWidth: "600px" }} // coluna centralizada
        >
          <Outlet />
        </motion.div>
      </Box>
    </>
  );
}
