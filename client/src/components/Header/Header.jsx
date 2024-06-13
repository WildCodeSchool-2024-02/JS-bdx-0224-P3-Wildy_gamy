import { Link } from "react-router-dom";
import "./Header.scss";

const BASE_URL_LOGO = "http://localhost:3000/static/assets/images/logo";
const BASE_URL_ICON = "http://localhost:3000/static/assets/images/icon";
const logoWGWritten2 = `${BASE_URL_LOGO}/logo-written-wg2.svg`;
const addUserIcon = `${BASE_URL_ICON}/icons8-add-user.png`;

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
        <Link to="/" className="link-logo-wg-written">
          <img src={logoWGWritten2} alt="" className="logo-wg-written" />
        </Link>
        <Link to="/demo" className="nav-link">
          Démo
        </Link>
        <Link to="/connection" className="nav-link">
          Compte
        </Link>
        <Link to="/connection">
          <img src={addUserIcon} alt="" className="add-user-icon" />
        </Link>
      </nav>
    </header>
  );
}

export default Header;
