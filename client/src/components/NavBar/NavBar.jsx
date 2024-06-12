import { Link } from "react-router-dom";
import "./NavBar.scss";

function NavBar() {
  return (
    <nav className="navbar-bottom" aria-label="Barre de navigation">
      <ul className="navbar-list">
        <li className="navbar-item">
          <img className="icon-footer" src="" alt="" />
          <Link to="/" className="navbar-link">
            Accueil
          </Link>
        </li>
        <li className="navbar-item">
          <img className="icon-footer catalog-icon" src="" alt="" />
          <Link to="/catalog" className="navbar-link">
            Catalogue
          </Link>
        </li>
        <li className="navbar-item">
          <img className="icon-footer" src="" alt="" />
          <Link to="/demo" className="navbar-link">
            Démo
          </Link>
        </li>
        <li className="navbar-item">
          <img className="icon-footer" src="" alt="" />
          <Link to="/reward" className="navbar-link">
            Prix
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
