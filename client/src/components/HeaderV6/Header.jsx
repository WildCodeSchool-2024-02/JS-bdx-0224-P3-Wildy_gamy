import { useState, useEffect } from "react";
// import navLinks from "../../data/navLinks2.json";
import "./Header.scss";
import NavigationMenu from "../NavigationMenu/NavigationMenu";

const navLinks = [
  { to: "/", label: "Wildy Gamy", className: "wg-link" },
  { to: "/connection", label: "Compte", className: "nav-link account-link" },
  { to: "/", label: "Accueil", className: "nav-link" },
  { to: "/catalogue", label: "Catalogue", className: "nav-link" },
  { to: "/demo", label: "Démo", className: "nav-link" },
  { to: "/prix", label: "Prix", className: "nav-link" },
];

function Header() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const mobileHeaderLinks = navLinks.slice(0, 2);
  const mobileNavLinks = navLinks.slice(2);
  const desktopLinks = navLinks;

  return (
    <>
      <header>
        <nav aria-label="Barre de navigation principale">
          <NavigationMenu links={isMobile ? mobileHeaderLinks : desktopLinks} />
        </nav>
      </header>
        {isMobile && (
          <nav
            aria-label="Barre de navigation mobile"
            className="navbar-bottom"
          >
            <NavigationMenu links={mobileNavLinks} />
          </nav>
        )}
    </>
  );
}

export default Header;
