import { Link } from "react-router-dom";

function ErrorPage404() {
  return (
    <main>
      <h1 className="titleError404">Erreur 404</h1>
      <Link to="/" className="linkError">
        Retour au menu 
      </Link>
    </main>
  );
}

export default ErrorPage404;
