import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

function NavigationMenu({ links }) {
  return (
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
  );
}

NavigationMenu.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      className: PropTypes.string,
    })
  ).isRequired,
};

export default NavigationMenu;
