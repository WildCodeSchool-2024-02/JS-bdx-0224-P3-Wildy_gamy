import navLinks from "../../data/navLinks.json";
import "./Header.scss";
import NavigationMenu from "../NavigationMenu/NavigationMenu";

function Header() {
  return (
    <header className="top-page">
      <nav className="navigation">
        <NavigationMenu links={navLinks.header} />
      </nav>
    </header>
  );
}

export default Header;
