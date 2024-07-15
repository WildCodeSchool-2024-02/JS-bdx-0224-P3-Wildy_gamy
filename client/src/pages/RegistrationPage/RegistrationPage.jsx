import { Form, Link } from "react-router-dom";
import "./RegistrationPage.scss";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

function RegistrationPage() {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <main>
      <h1 className="registration-title">Inscription </h1>
      <Form method="post" className="registration-form">
        <label className="label-registration" htmlFor="firstname">
          Prénom
        </label>
        <input
          className="input-registration"
          type="text"
          id="firstname"
          name="firstname"
          placeholder="Prénom"
          required
        />
        <label className="label-registration" htmlFor="lastname">
          Nom
        </label>
        <input
          className="input-registration"
          type="text"
          id="lastname"
          name="lastname"
          placeholder="Nom"
          required
        />
        <label className="label-registration" htmlFor="pseudo">
          Pseudo
        </label>
        <input
          className="input-registration"
          type="text"
          id="pseudo"
          name="pseudo"
          placeholder="Pseudo"
          required
        />
        <label className="label-registration" htmlFor="email">
          Email
        </label>
        <input
          className="input-registration"
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          pattern="^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$"
          required
        />
        <label className="label-registration" htmlFor="password">
          Mot de passe
          <FontAwesomeIcon
            onClick={toggleShowPassword}
            className="password-toggle-icon"
            icon={showPassword ? faEyeSlash : faEye}
          />
        </label>
        <input
          className="input-registration"
          type={showPassword ? "text" : "password"}
          minLength="8"
          id="password"
          name="password"
          placeholder="Mot de passe"
          pattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*\\-]).{8,}$"
          required
        />
        <button
          className="validation-button"
          type="submit"
        >
          Valider
        </button>
        <Link to="/connexion" className="link-connexion">
          Déjà un compte ?
        </Link>
      </Form>
    </main>
  );
}

export default RegistrationPage;
