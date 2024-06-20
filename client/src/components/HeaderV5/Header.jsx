import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";

const links = [
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

  const mobileHeaderLinks = links.slice(0, 2);
  const mobileNavLinks = links.slice(2);
  const desktopLinks = links;

  return (
    <header>
      <nav>
        <ul>
          {isMobile
            ? mobileHeaderLinks.map(({ to, label, className }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    className={className}
                    activeClassName="active"
                  >
                    {label}
                  </NavLink>
                </li>
              ))
            : desktopLinks.map(({ to, label, className }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    className={className}
                    activeClassName="active"
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
        </ul>
      </nav>
      {isMobile && (
        <nav aria-label="Barre de navigation" className="navbar-bottom">
          <ul>
            {mobileNavLinks.map(({ to, label, className }) => (
              <li key={to}>
                <NavLink to={to} className={className} activeClassName="active">
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
