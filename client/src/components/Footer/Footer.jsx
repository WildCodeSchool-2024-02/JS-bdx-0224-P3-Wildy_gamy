import { Link } from "react-router-dom";
import "./Footer.scss";

function Footer() {
  return (
    <footer>
      <Link to="/contact#section-contact" className="footer-link">
        Contactez-nous
      </Link>
      <Link to="/contact#section-nous-trouver" className="footer-link">
        Où nous trouver ?
      </Link>
      <Link to="/infos" className="footer-link">
        À propos de nous
      </Link>
    </footer>
  );
}

export default Footer;
