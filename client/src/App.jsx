import { Outlet } from "react-router-dom";
import "./scss/index.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import useScrollToAnchor from "./hooks/useScrollToAnchor";
import { headerLinks, footerLinks } from "./services/links";

function App() {
  useScrollToAnchor();

  return (
    // <main>
    <>
      <Header links={headerLinks} />
      <Outlet />
      <Footer links={footerLinks} />
    </>
    // </main>
  );
}

export default App;
