import { useLocation } from "react-router-dom";
import NavLinkItem from "../NavLinkItem/NavLinkItem";
import navLinks from "../../data/navLinks.json";
import iconAddUser from "../../assets/images/icon/icons8-add-user.png";
import "./Header.scss";

function Header() {
  const location = useLocation();

  const headerLinks = navLinks.header.map((link) => ({
    ...link,
    isActive: location.pathname === link.to,
  }));

  return (
    <header className="top-page">
      <nav className="navigation">
        {headerLinks.map((link) =>
          link.to === "/connection" ? (
            <NavLinkItem
              key={link.to}
              to={link.to}
              label={link.label}
              className={link.className}
              icon={{
                src: iconAddUser,
                alt: "User Icon",
                className: "account-icon",
              }}
            />
          ) : (
            <NavLinkItem
              key={link.to}
              to={link.to}
              label={link.label}
              className={link.className}
            />
          )
        )}
      </nav>
    </header>
  );
}

export default Header;
