import "./Header.scss";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Accueil", className: "home" },
  { to: "/catalogue", label: "Catalogue", className: "catalog" },
  { to: "/demo", label: "Démo", className: "demo" },
  { to: "/prix", label: "Prix", className: "reward" },
];

const topLinks = [
  { to: "/", label: "Wildy Gamy", className: "wg-link" },
  { to: "/connection", label: "Compte", className: "account-link" },
];

function Header() {
  return (
    <>
      <header>
        <nav>
          <ul>
            {topLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  activeClassName="active"
                  className={link.className}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <nav className="navbar-bottom" aria-label="Barre de navigation">
        <ul>
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                activeClassName="active"
                className={link.className}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default Header;
