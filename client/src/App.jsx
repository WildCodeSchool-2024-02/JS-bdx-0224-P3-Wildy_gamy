import { Outlet } from "react-router-dom";
import "./scss/index.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import useScrollToAnchor from "./hooks/useScrollToAnchor";

const links = [
  { to: "/", label: "Accueil", className: "nav-link home" },
  { to: "/catalogue", label: "Catalogue", className: "nav-link catalog" },
  { to: "/demo", label: "Démo", className: "nav-link demo" },
  { to: "/prix", label: "Prix", className: "nav-link reward" },
];

function App() {
  useScrollToAnchor();

  return (
    <main>
      <Header links={links} />
      <Outlet />
      <Footer />
    </main>
  );
}

export default App;
