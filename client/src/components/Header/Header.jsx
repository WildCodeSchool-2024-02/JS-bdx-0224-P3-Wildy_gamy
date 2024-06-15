import { Link, useLocation } from "react-router-dom";
import "./Header.scss";

const BASE_URL = import.meta.env.VITE_API_URL;
const iconAddUser = `${BASE_URL}/icon/icons8-add-user.png`;

function Header() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="top-page">
      <nav className="navigation">
        <Link
          to="/catalogue"
          className={`nav-link ${isActive("/catalogue") ? "active" : ""}`}
        >
          Catalogue
        </Link>
        <Link
          to="/prix"
          className={`nav-link ${isActive("/prix") ? "active" : ""}`}
        >
          Prix
        </Link>
        <Link to="/" className={`wg-written ${isActive("/") ? "active" : ""}`}>
          Wildy Gamy
        </Link>
        <Link
          to="/demo"
          className={`nav-link ${isActive("/demo") ? "active" : ""}`}
        >
          Démo
        </Link>
        <Link
          to="/connection"
          className={`nav-link account-link ${isActive("/connection") ? "active" : ""}`}
        >
          Compte
          <img
            src={iconAddUser}
            alt="Icône compte utilisateur"
            className={`account-icon ${isActive("/connection") ? "active" : ""}`}
          />
        </Link>
      </nav>
    </header>
  );
}

export default Header;
