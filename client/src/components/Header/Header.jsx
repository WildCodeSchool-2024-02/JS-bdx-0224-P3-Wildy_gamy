import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <header className="top-page">
      <nav className="navigation">
        <Link to="/catalogue" className="nav-link">
          Catalogue
        </Link>
        <Link to="/prix" className="nav-link">
          Prix
        </Link>
        <Link to="/" className="wg-written">
          Wildy Gamy
        </Link>
        <Link to="/demo" className="nav-link">
          Démo
        </Link>
        <Link to="/connection" className="nav-link">
          Compte
        </Link>
        <Link to="/connection" className="nav-icon">
          <img src="iconAddUser" alt="" className="img-icon"/>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
