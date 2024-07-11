import { createContext, useContext, useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import decodeToken from "../services/decodeToken";

export const AuthContext = createContext();
export default function AuthProvider({ children }) {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const userData = decodeToken(token);
      setAuth(userData);
    }
  }, []);

  const logout = () => {
    setAuth(null);
    localStorage.removeItem("token");
  };

  const contextValue = useMemo(() => ({ auth, setAuth, logout }), [auth]);

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useAuth = () => useContext(AuthContext);

export { AuthProvider };
