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

  const loginFields = [
    {
      id: "email",
      label: "Email",
      type: "email",
      placeholder: "Entrez votre email",
      pattern: "^[a-zA-Z0-9._%+\\-]+@[a-zA-Z0-9.\\-]+\\.[a-zA-Z]{2,}$",
      required: true,
    },
    {
      id: "password",
      label: "Mot de passe",
      type: showPassword ? "text" : "password",
      placeholder: "Mot de passe",
      pattern:
        "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*\\-]).{8,}$",
      required: true,
    },
  ];

  return (
    <main>
      <h1 className="connexion-title">Connexion</h1>
      <Form method="post" className="connexion-form">
        {loginFields.map((field) => (
          <>
            <label
              key={field.id}
              className="label-connexion"
              htmlFor={field.id}
            >
              {field.label}
              {field.id === "password" && (
                <FontAwesomeIcon
                  onClick={toggleShowPassword}
                  className="password-toggle-icon"
                  icon={showPassword ? faEyeSlash : faEye}
                />
              )}
            </label>
            <input
              className="input-connexion"
              type={field.type}
              id={field.id}
              name={field.id}
              placeholder={field.placeholder}
              pattern={field.pattern}
              required={field.required}
            />
          </>
        ))}
        <button className="login-button" type="submit">
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