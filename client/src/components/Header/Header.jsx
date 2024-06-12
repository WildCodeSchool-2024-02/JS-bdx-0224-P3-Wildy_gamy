import { Link } from "react-router-dom";
import "./Header.scss";
// import logoWGWritten from "@harmonia/server/public/assets/images/logo/logo-written-wg2.svg";
// import addUserIcon from "@harmonia/server/public/assets/images/icon/icons8-add-user.png";

function Header() {
  return (
    <header className="top-page">
      <nav className="navigation">
        <Link to="/catalog" className="nav-link">
          Catalogue
        </Link>
        <Link to="/reward" className="nav-link">
          Prix
        </Link>
        <Link to="/" className="link-logo-wg-written">
          <img src="" alt="" className="logo-wg-written" />
        </Link>
        <Link to="/demo" className="nav-link">
          Démo
        </Link>
        <Link to="/login" className="nav-link">
          Compte
        </Link>
        <Link to="/login">
          <img src="" alt="" className="add-user-icon" />
        </Link>
      </nav>
    </header>
  );
}

export default Header;
