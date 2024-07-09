import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Footer.scss";

function Footer({links}) {

  return (
    <footer>
      {links.map((link) => (
        <Link key={link.to} to={link.to}>
          {link.label}
        </Link>
      ))}
    </footer>
  );
}

Footer.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Footer;
