import { Outlet } from "react-router-dom";
import "./scss/index.scss"
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <main>
      <Outlet />
      <NavBar />
      <Footer />
    </main>
  );
}

export default App;
