import { Link } from "react-router-dom";
import "./Footer.scss";

function Footer() {
  return (
    <footer>
      <Link to="/contact#contact-section" className="footer-link">
        Contactez-nous
      </Link>
      <Link to="/contact#coordinates-section" className="footer-link">
        Où nous trouver ?
      </Link>
      <Link to="/infos" className="footer-link">
        À propos de nous
      </Link>
    </footer>
  );
}

export default Footer;
