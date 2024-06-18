import Navigation from "../Navigation/Navigation";
import navLinks from "../../data/navLinks.json";
import "./NavBar.scss";

function NavBar() {
  return (
    <nav className="navbar-bottom" aria-label="Barre de navigation">
      <Navigation links={navLinks.navbar} className="navbar-list" />
    </nav>
  );
}

export default NavBar;
