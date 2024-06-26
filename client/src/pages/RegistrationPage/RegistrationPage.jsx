import { Form, Link } from "react-router-dom";
import "./RegistrationPage.scss";
import { useState } from "react";

function RegistrationPage() {
  const [formRegistration, setFormRegistration] = useState({
    firstname: "jean",
    lastname: "bon",
    pseudo: "groin",
    email: "johndoe@email.com",
    password: "1234",
  });

  const handleRegistrationChange = (event) => {
    setFormRegistration({
      ...formRegistration,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <h2 className="registration-title">Inscription </h2>
      <Form method="post" className="registration-form">
        <label className="label-registration" htmlFor="firstname">
          Prénom
        </label>
        <input
          className="input-registration"
          type="text"
          minLength="5"
          id="firstname"
          name="firstname"
          placeholder="Prénom"
          value={formRegistration.firstname}
          required
          onChange={handleRegistrationChange}
        />
        <label className="label-registration" htmlFor="lastname">
          Nom
        </label>
        <input
          className="input-registration"
          type="text"
          minLength="5"
          id="lastname"
          name="lastname"
          placeholder="Nom"
          value={formRegistration.lastname}
          required
          onChange={handleRegistrationChange}
        />
        <label className="label-registration" htmlFor="pseudo">
          Pseudo
        </label>
        <input
          className="input-registration"
          type="text"
          minLength="5"
          id="pseudo"
          name="pseudo"
          placeholder="Pseudo"
          value={formRegistration.pseudo}
          required
          onChange={handleRegistrationChange}
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
          value={formRegistration.email}
          pattern="^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$"
          required
          onChange={handleRegistrationChange}
        />
        <label className="label-registration" htmlFor="password">
          Mot de passe
        </label>
        <input
          className="input-registration"
          type="text"
          minLength="5"
          id="password"
          name="password"
          placeholder="Mot de passe"
          value={formRegistration.password}
          required
          onChange={handleRegistrationChange}
        />
        <button
          className="validation-button"
          type="submit"
          aria-label="validation"
          // onClick={postRegistration}
        >
          Valider
        </button>
        <Link to="/connexion" className="link-connexion">
          Déjà un compte ?
        </Link>
      </Form>
    </>
  );
}

export default RegistrationPage;
