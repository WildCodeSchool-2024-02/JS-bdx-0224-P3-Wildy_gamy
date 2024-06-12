import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";

import ErrorPage404 from "./pages/ErrorPage404/ErrorPage404";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {path: "/",
      },
      {
        path: "*",
        element: <ErrorPage404 />,
      },
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
