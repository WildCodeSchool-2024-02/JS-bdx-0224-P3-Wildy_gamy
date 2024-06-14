import { Link } from "react-router-dom";
import "./NavBar.scss";

function NavBar() {
  return (
    <nav className="navbar-bottom" aria-label="Barre de navigation">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/" className="navbar-link home">
            Accueil
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/catalogue" className="navbar-link catalog">
            Catalogue
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/demo" className="navbar-link demo">
            Démo
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/prix" className="navbar-link reward">
            Prix
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
