import { Outlet } from "react-router-dom";

import { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import "./scss/index.scss";

function App() {
  const [user, setUser] = useState();
  return (
    <main>
      <Outlet context={{ user, setUser }} />
      <NavBar />
    </main>
  );
}

export default App;

