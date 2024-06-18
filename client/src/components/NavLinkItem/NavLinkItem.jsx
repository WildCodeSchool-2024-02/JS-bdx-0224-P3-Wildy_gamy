import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

function NavLinkItem({ to, label, className, icon }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => `${className} ${isActive ? "active" : ""}`}
      end={to === "/"}
    >
      {label}
      {icon && (
        <img src={icon.src} alt={icon.alt} className={`${icon.className}`} />
      )}
    </NavLink>
  );
}

NavLinkItem.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  icon: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
  }),
};

NavLinkItem.defaultProps = {
  icon: null,
};

export default NavLinkItem;
