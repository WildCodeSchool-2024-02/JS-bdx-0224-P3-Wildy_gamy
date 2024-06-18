import "./LoginPage.scss";

function LoginPage() {
  return (
    <>
      <h2 className="contactTitle">Connexion </h2>
      <form className="ContactForm">
        <label className="labelContact" htmlFor="email">
          Email
        </label>
        <input
          className="inputContact"
          type="email"
          id="email"
          pattern="^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$"
          required
        />
        <label className="labelContact" htmlFor="password">
          Mot de passe
        </label>
        <input
          className="inputContact"
          type="text"
          minLength="5"
          id="password"
          required
        />
        <button className="contactButton" type="submit" aria-label="Se connecter">
          Se connecter
        </button>
        <button className="contactButton" type="submit" aria-label="Créer un compte">
          Créer un compte
        </button>
      </form>
    </>
  );
}

export default LoginPage;
