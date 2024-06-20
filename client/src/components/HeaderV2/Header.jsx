import "./Header.scss";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Accueil", className: "nav-link home" },
  { to: "/catalogue", label: "Catalogue", className: "nav-link catalog" },
  { to: "/demo", label: "Démo", className: "nav-link demo" },
  { to: "/", label: "Wildy Gamy", className: "wg-link" },
  { to: "/prix", label: "Prix", className: "nav-link reward" },
  { to: "/connection", label: "Compte", className: "account-link" },
];

function Header() {
  return (
    <header>
      <nav role="navigation" aria-label="Menu principal">
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
  );
}

export default Header;
