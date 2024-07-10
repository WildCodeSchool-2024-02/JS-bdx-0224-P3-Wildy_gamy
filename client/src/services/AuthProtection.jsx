import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { AuthContext } from "../context/AuthContext";

function AuthProtection({ children }) {
  const navigate = useNavigate();

  const { auth } = useContext(AuthContext);

  useEffect(() => {
    if (auth?.role !== "user") {
      navigate("/connexion");
    }
  }, [auth]);

  return children;
}

AuthProtection.propTypes = {
  children: PropTypes.node,
};
AuthProtection.defaultProps = {
  children: null,
};
export default AuthProtection;
