import { Link } from "react-router-dom";
import "./Header.scss";

const BASE_URL = import.meta.env.VITE_API_URL;
const iconAddUser = `${BASE_URL}/icon/icons8-add-user.png`;

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
        <Link to="/connection" className="nav-link account-link">
          Compte
          <img src={iconAddUser} alt="" className="account-icon"/>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
