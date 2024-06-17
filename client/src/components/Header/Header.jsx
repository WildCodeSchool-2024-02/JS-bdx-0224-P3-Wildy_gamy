import { NavLink, useLocation } from "react-router-dom";
import "./Header.scss";
import navLinks from "../../data/navLinks.json";

const BASE_URL = import.meta.env.VITE_API_URL;

function Header() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="top-page">
      <nav className="navigation">
        {navLinks.header.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={`${link.className}`}
            activeClassName="active"
          >
            {link.label}
            {link.icon && (
              <img
                src={`${BASE_URL}/${link.icon.src}`}
                alt={link.icon.alt}
                className={`${link.icon.className} ${isActive(link.to) ? "active" : ""}`}
              />
            )}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

export default Header;
