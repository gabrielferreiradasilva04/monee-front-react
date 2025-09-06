import React, { createContext, useContext, useState, useEffect } from "react";
import { api } from "../../services/axiosConfig.js";
import { useNotification } from "./NotificationProvider.jsx";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const { showNotification } = useNotification();

  useEffect(() => {
    //verificar se o usuário está autenticado
    api
      .get("/verify-auth", { withCredentials: true })
      .then((res) => setIsAuthenticated(true))
      .catch(() => setIsAuthenticated(false))
      .finally(() => setLoading(false));
  }, []);

  const login = (authenticated) => setIsAuthenticated(authenticated);

  const logout = async () => {
    try {
      api.post("/logout", {}, { withCredentials: true });
      setIsAuthenticated(false);
    } catch (error) {
      showNotification("Erro no processo de logout. Entre em contato conosco");
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
    