import { Link, useLocation } from "react-router-dom";
import "./NavBar.scss";

function NavBar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { to: "/", label: "Accueil", className: "home" },
    { to: "/catalogue", label: "Catalogue", className: "catalog" },
    { to: "/demo", label: "Démo", className: "demo" },
    { to: "/prix", label: "Prix", className: "reward" },
  ];

  return (
    <nav className="navbar-bottom" aria-label="Barre de navigation">
      <ul className="navbar-list">
        {navLinks.map((link) => (
          <li key={link.to} className="navbar-item">
            <Link
              to={link.to}
              className={`navbar-link ${link.className} ${isActive(link.to) ? "active" : ""}`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
