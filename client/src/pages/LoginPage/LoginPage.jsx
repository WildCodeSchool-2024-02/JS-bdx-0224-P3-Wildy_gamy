import { Form, Link } from "react-router-dom";
import "./LoginPage.scss";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <main>
      <h1 className="connexion-title">Connexion </h1>
      <Form method="post" className="connexion-form">
        <label className="label-connexion" htmlFor="email">
          Email
        </label>
        <input
          className="input-connexion"
          type="email"
          id="email"
          name="email"
          placeholder="Entrez votre email"
          pattern="^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$"
          required
        />
        <label className="label-connexion" htmlFor="password">
          Mot de passe
          <FontAwesomeIcon
            onClick={toggleShowPassword}
            className="password-toggle-icon"
            icon={showPassword ? faEyeSlash : faEye}
          />
        </label>
        <input
          className="input-connexion"
          type={showPassword ? "text" : "password"}
          id="password"
          name="password"
          placeholder="Mot de passe"
          pattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*\\-]).{8,}$"
          required
        />
        <button
          className="login-button"
          type="submit"
        >
          Se connecter
        </button>
        <Link to="/inscription" className="link-registration">
          Créer un compte
        </Link>
      </Form>
    </main>
  );
}

export default LoginPage;
