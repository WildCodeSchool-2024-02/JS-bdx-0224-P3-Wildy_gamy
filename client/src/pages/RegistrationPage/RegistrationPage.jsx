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

  const registrationFields = [
    {
      id: "firstname",
      label: "Prénom",
      type: "text",
      placeholder: "Prénom",
      required: true,
    },
    {
      id: "lastname",
      label: "Nom",
      type: "text",
      placeholder: "Nom",
      required: true,
    },
    {
      id: "pseudo",
      label: "Pseudo",
      type: "text",
      placeholder: "Pseudo",
      required: true,
    },
    {
      id: "email",
      label: "Email",
      type: "email",
      placeholder: "Email",
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
      minLength: 8,
      required: true,
    },
  ];

  return (
    <main>
      <h1 className="registration-title">Inscription</h1>
      <Form method="post" className="registration-form">
        {registrationFields.map((field) => (
          <>
            <label
              key={field.id}
              className="label-registration"
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
              className="input-registration"
              type={field.type}
              id={field.id}
              name={field.id}
              placeholder={field.placeholder}
              pattern={field.pattern}
              minLength={field.minLength}
              required={field.required}
            />
          </>
        ))}
        <button className="validation-button" type="submit">
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