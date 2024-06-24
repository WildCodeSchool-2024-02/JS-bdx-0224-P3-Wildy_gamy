import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import HomePage from "./pages/HomePage/HomePage";
import GameListPage from "./pages/GameListPage/GameListPage";
import DemoPage from "./pages/DemoPage";
import RewardPage from "./pages/RewardPage/RewardPage";

import ErrorPage404 from "./pages/ErrorPage404/ErrorPage404";
import { fetchApi } from "./services/api.service";

const baseUrlReward = "/api/rewards";

const router = createBrowserRouter([
  {
    element: <App />,

    errorElement: <ErrorPage404 />,
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
        loader: () => fetchApi(`${baseUrlReward}`),
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
