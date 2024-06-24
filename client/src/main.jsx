import React from "react";
import ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";

import App from "./App";
import HomePage from "./pages/HomePage/HomePage";
import GameListPage from "./pages/GameListPage/GameListPage";
import DemoPage from "./pages/DemoPage";
import RewardPage from "./pages/RewardPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import ErrorPage404 from "./pages/ErrorPage404/ErrorPage404";
import { sendData } from "./services/api.service";

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
      },
      {
        path: "/connexion",
        element: <LoginPage />,
        action: async ({ request }) => {
          try {
            const formData = await request.formData();
            const data = Object.fromEntries(formData.entries());

            const { email, password } = data;

            if (!email || !password) {
              throw new Error("All fields are required");
            }

            const url = "/api/connection";

            const response = await sendData(url, data, "POST");

            if (response && response.ok) {
              return redirect(`/`);
            }

            throw new Error("Invalid response from server");
          } catch (error) {
            console.error("Error submitting form:", error);
            return { error: error.message };
          }
        },
      },
      {
        path: "/inscription",
        element: <RegistrationPage />,
        action: async ({ request }) => {
          try {
            const formData = await request.formData();
            const data = Object.fromEntries(formData.entries());

            const { firstname, lastname, pseudo, email, password } = data;

            if (!firstname || !lastname || !pseudo || !email || !password) {
              throw new Error("All fields are required");
            }

            const url = "/api/registration";

            const response = await sendData(url, data, "POST");

            if (response && response.ok) {
              return redirect(`/connexion`);
            }

            throw new Error("Invalid response from server");
          } catch (error) {
            console.error("Error submitting form:", error);
            return { error: error.message };
          }
        },
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
