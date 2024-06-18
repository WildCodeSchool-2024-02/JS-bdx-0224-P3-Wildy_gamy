import { Link } from "react-router-dom";
import "./LoginPage.scss";

function LoginPage() {
  return (
    <>
      <h2 className="connexion-title">Connexion </h2>
      <form className="connexion-form">
        <label className="label-connexion" htmlFor="email">
          Email
        </label>
        <input
          className="input-connexion"
          type="email"
          id="email"
          pattern="^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$"
          required
        />
        <label className="label-connexion" htmlFor="password">
          Mot de passe
        </label>
        <input
          className="input-connexion"
          type="text"
          minLength="5"
          id="password"
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
          <p>Créer un compte</p>
        </Link>
      </form>
    </>
  );
}

export default LoginPage;
