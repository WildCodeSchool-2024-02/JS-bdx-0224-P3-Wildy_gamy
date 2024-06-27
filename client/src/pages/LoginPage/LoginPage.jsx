import { Form, Link } from "react-router-dom";
import "./LoginPage.scss";
import { useState } from "react";

function LoginPage() {
  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  });

  const handleLoginChange = (event) => {
    setFormLogin({ ...formLogin, [event.target.name]: event.target.value });
  };

  const postLogin = () => {
    console.info(formLogin);
  };

  return (
    <>
      <h2 className="connexion-title">Connexion </h2>
      <Form method="post" className="connexion-form">
        <label className="label-connexion" htmlFor="email">
          Email
        </label>
        <input
          className="input-connexion"
          type="email"
          id="email"
          name="email"
          value={formLogin.email}
          placeholder="johndoe@email.com"
          pattern="^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$"
          required
          onChange={handleLoginChange}
        />
        <label className="label-connexion" htmlFor="password">
          Mot de passe
        </label>
        <input
          className="input-connexion"
          type="text"
          minLength="5"
          id="password"
          name="password"
          value={formLogin.password}
          placeholder="********"
          required
          onChange={handleLoginChange}
        />
        <button
          className="login-button"
          type="submit"
          aria-label="Se connecter"
          onClick={postLogin}
        >
          Se connecter
        </button>
        <Link to="/inscription" className="link-registration">
          Créer un compte
        </Link>
      </Form>
    </>
  );
}

export default LoginPage;
