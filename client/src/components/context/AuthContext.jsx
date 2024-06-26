// src/context/AuthContext.js
import { createContext, useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import apiService from "../../services/api.service";


export const AuthContext = createContext();

function AuthProvider ({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }
  }, []);

  const login = async (email, password) => {
    try {
      const response = await apiService.post("/api/connection", {
        email,
        password,
      });
      if (response.ok) {
        const data = await response.json();
        setUser(data.user);
        localStorage.setItem("user", JSON.stringify(data.user));
        navigate("/");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    navigate("/connexion");
  };

  const register = async (userData) => {
    try {
      const response = await apiService.post("/api/users", userData);
      if (response.ok) {
        navigate("/connexion");
      }
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  const value = useMemo(() => ({ user, login, logout, register }), [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };
