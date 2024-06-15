import { Outlet } from "react-router-dom";
import "./scss/index.scss"
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <main>
      <Header />
      <Outlet />
      <NavBar />
      <Footer />
    </main>
  );
}

export default App;
