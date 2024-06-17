import { Outlet } from "react-router-dom";

import "./scss/index.scss";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";

function App() {
  return (
    <main>
      <Header />
      <Outlet />
      <NavBar />
    </main>
  );
}

export default App;

