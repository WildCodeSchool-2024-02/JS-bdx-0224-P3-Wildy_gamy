import { NavLink, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const BASE_URL = import.meta.env.VITE_API_URL;

function Navigation({ links, className }) {
  const location = useLocation();

  return (
    <nav className={className}>
      {links.map((link) => {
        const isActive = location.pathname === link.to;

        return (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive: navLinkIsActive }) =>
              `${link.className} ${navLinkIsActive ? "active" : ""}`
            }
            end={link.to === "/"}
          >
            {link.label}
            {link.icon && (
              <img
                src={`${BASE_URL}/${link.icon.src}`}
                alt={link.icon.alt}
                className={`${link.icon.className} ${isActive ? "active" : ""}`}
              />
            )}
          </NavLink>
        );
      })}
    </nav>
  );
}

Navigation.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      className: PropTypes.string.isRequired,
      icon: PropTypes.shape({
        src: PropTypes.string,
        alt: PropTypes.string,
        className: PropTypes.string,
      }),
    })
  ).isRequired,
  className: PropTypes.string.isRequired,
};

export default Navigation;
