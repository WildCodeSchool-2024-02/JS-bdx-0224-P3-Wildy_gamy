import { Outlet } from "react-router-dom";
import "./scss/index.scss";
import { useState } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import useScrollToAnchor from "./hooks/useScrollToAnchor";
import { headerLinks, footerLinks } from "./services/links";

function App() {
  const [auth, setAuth] = useState();
  useScrollToAnchor();

  return (
    <main>
      <Header links={headerLinks} />
      <Outlet context={{ auth, setAuth }} />
      <Footer links={footerLinks} />
    </main>
  );
}

export default App;
