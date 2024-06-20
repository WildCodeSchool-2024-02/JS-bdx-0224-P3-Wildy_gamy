import "./Header.scss";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Wildy Gamy", className: "wg-link" },
  { to: "/connection", label: "Compte", className: "nav-link account-link" },
  { to: "/", label: "Accueil", className: "nav-link" },
  { to: "/catalogue", label: "Catalogue", className: "nav-link" },
  { to: "/demo", label: "Démo", className: "nav-link" },
  { to: "/prix", label: "Prix", className: "nav-link" },
];

function Header() {
  return (
    <>
      <header>
        <nav>
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
