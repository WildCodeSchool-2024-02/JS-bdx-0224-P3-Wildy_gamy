import { Outlet } from "react-router-dom";
import "./scss/index.scss"
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <main>
      <Outlet />
      <NavBar />
    </main>
  );
}

export default App;
