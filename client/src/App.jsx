import { Outlet } from "react-router-dom";

import { useState } from "react";
import Header from "./components/Header/Header";
import "./scss/index.scss";

const links = [
  { to: "/", label: "Accueil", className: "nav-link home" },
  { to: "/catalogue", label: "Catalogue", className: "nav-link catalog" },
  { to: "/demo", label: "Démo", className: "nav-link demo" },
  { to: "/prix", label: "Prix", className: "nav-link reward" },
];

function App() {
  const [user, setUser] = useState();
  return (
    <main>
      <Header links={links} />
      <Outlet context={{ user, setUser }} />
      <Header/>
    </main>
  );
}

export default App;
