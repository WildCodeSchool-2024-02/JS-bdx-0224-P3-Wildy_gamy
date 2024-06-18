import navLinks from "../../data/navLinks.json";
import "./NavBar.scss";
import NavigationMenu from "../NavigationMenu/NavigationMenu";

function NavBar() {
  return (
    <nav className="navbar-bottom" aria-label="Barre de navigation">
      <NavigationMenu links={navLinks.navbar} />
    </nav>
  );
}

export default NavBar;
