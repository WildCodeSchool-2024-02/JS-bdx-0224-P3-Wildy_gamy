import Navigation from "../Navigation/Navigation";
import navLinks from "../../data/navLinks.json";
import "./Header.scss";

function Header() {
  return (
    <header className="top-page">
      <Navigation links={navLinks.header} className="navigation" />
    </header>
  );
}

export default Header;
