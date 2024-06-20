import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/" activeClassName="active" className="nav-link">
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/catalogue"
              activeClassName="active"
              className="nav-link"
            >
              Catalogue
            </NavLink>
          </li>
          <li>
            <NavLink to="/demo" activeClassName="active" className="nav-link">
              Démo
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className="wg-link">
              Wildy Gamy
            </NavLink>
          </li>
          <li>
            <NavLink to="/prix" activeClassName="active" className="nav-link">
              Prix
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/connection"
              activeClassName="active"
              className="account-link"
            >
              Compte
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
