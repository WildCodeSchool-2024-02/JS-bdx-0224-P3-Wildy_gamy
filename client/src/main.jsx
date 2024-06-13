import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import HomePage from "./pages/HomePage";
import GameListPage from "./pages/GameListPage";
import DemoPage from "./pages/DemoPage";
import RewardPage from "./pages/RewardPage";
import LoginPage from "./pages/LoginPage";

import ErrorPage404 from "./pages/ErrorPage404/ErrorPage404";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      {
        path: "/catalogue",
        element: <GameListPage />,
      },
      {
        path: "/demo",
        element: <DemoPage />,
      },
      {
        path: "/prix",
        element: <RewardPage />,
      },
      {
        path: "/connection",
        element: <LoginPage />,
      },
      {
        path: "*",
        element: <ErrorPage404 />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
