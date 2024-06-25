import "./Header.scss";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

function Header({ links }) {
  return (
    <header>
      <nav role="navigation">
        <ul>
          {links.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} className={link.className}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <span className="wg-written">Wildy Gamy</span>
      <NavLink to="/connexion" className="account-link">
        Compte
      </NavLink>
    </header>
  );
}

Header.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      className: PropTypes.string,
    })
  ).isRequired,
};

export default Header;
