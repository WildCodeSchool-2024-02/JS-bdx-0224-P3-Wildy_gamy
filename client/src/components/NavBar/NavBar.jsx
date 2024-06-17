import { NavLink } from "react-router-dom";
import "./NavBar.scss";
import navLinks from "../../data/navLinks.json";

function NavBar() {
  return (
    <nav className="navbar-bottom" aria-label="Barre de navigation">
      <ul className="navbar-list">
        {navLinks.navbar.map((link) => (
          <li key={link.to} className="navbar-item">
            <NavLink
              to={link.to}
              className={`navbar-link ${link.className}`}
              activeClassName="active"
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
