import { Form, Link } from "react-router-dom";
import "./LoginPage.scss";

function LoginPage() {
  return (
    <>
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
          placeholder="entrer votre email"
          pattern="^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$"
          required
        />
        <label className="label-connexion" htmlFor="password">
          Mot de passe
        </label>
        <input
          className="input-connexion"
          type="password"
          minLength="5"
          id="password"
          name="password"
          placeholder="********"
          required
        />
        <button
          className="login-button"
          type="submit"
          aria-label="Se connecter"
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
