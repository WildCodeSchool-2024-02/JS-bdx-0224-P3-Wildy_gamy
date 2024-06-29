import { Outlet } from "react-router-dom";
import "./scss/index.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import useScrollToAnchor from "./hooks/useScrollToAnchor";

const headerLinks = [
  { to: "/", label: "Accueil", className: "nav-link home" },
  { to: "/catalogue", label: "Catalogue", className: "nav-link catalog" },
  { to: "/demo", label: "Démo", className: "nav-link demo" },
  { to: "/prix", label: "Prix", className: "nav-link reward" },
];

const footerLinks = [
  { to: "/contact#formulaire", label: "Contactez-nous" },
  { to: "/contact#nous-trouver", label: "Où nous trouver ?" },
  { to: "/infos", label: "À propos de nous" },
];

function App() {
  useScrollToAnchor();

  return (
    <main>
      <Header links={headerLinks} />
      <Outlet />
      <Footer links={footerLinks} />
    </main>
  );
}

export default App;
