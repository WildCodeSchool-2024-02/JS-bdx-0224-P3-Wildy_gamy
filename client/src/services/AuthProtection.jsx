import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import decodeToken from "./decodeToken";

function AuthProtection({ children }) {
  const navigate = useNavigate();
  const [auth, setAuth] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      const userData = decodeToken(token);
      setAuth(userData);
    }
  }, []);

  useEffect(() => {
    if (!token && auth?.role !== "user") {
      navigate("/connexion");
    }
  }, [auth, navigate]);

  return children;
}

AuthProtection.propTypes = {
  children: PropTypes.node,
};

AuthProtection.defaultProps = {
  children: null,
};

export default AuthProtection;
