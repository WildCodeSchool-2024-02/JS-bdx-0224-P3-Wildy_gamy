import { useLocation } from "react-router-dom";
import NavLinkItem from "../NavLinkItem/NavLinkItem";
import navLinks from "../../data/navLinks.json";
import "./NavBar.scss";

function NavBar() {
  const location = useLocation();

  const navbarLinks = navLinks.navbar.map((link) => ({
    ...link,
    isActive: location.pathname === link.to,
  }));

  return (
    <nav className="navbar-bottom" aria-label="Barre de navigation">
      <ul className="navbar-list">
        {navbarLinks.map((link) => (
          <li key={link.to}>
            <NavLinkItem
              to={link.to}
              label={link.label}
              className={link.className}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
