import { Link } from "react-router-dom";
import "./NavBar.scss";

function NavBar() {
  return (
    <nav className="navbar-bottom" aria-label="Barre de navigation">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">
            <img className="icon-footer" src="" alt="" />
            Accueil
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/catalog" className="navbar-link">
            <img className="icon-footer catalog-icon" src="" alt="" />
            Catalogue
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/demo" className="navbar-link">
            <img className="icon-footer" src="" alt="" />
            Démo
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/reward" className="navbar-link">
            <img className="icon-footer" src="" alt="" />
            Prix
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
