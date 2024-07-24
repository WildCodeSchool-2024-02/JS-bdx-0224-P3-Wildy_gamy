import { Link } from "react-router-dom";

import "./ErrorPage404.scss"

function ErrorPage404() {
  return (
    <main className="error-page-main">
      <h1 className="titleError404">Erreur 404</h1>
      <Link to="/connexion" className="linkError">
        Retour à la connexion 
      </Link>
      <Link to="/" className="linkError">
        Retour au menu 
      </Link>
    </main>
  );
}

export default ErrorPage404;
