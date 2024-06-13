import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import GameListPage from "./pages/GameListPage";
import GameListModal from "./components/GameListModal"; 

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/games", // Chemin pour afficher la liste des jeux
    element: <GameListPage />, 
  },
  {
    path: "/game/:id", // Chemin pour afficher la modale du jeu avec un identifiant
    element: <GameListModal />, 
  },

]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
