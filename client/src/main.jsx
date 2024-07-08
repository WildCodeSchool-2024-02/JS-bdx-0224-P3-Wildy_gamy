import React from "react";
import ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";

import App from "./App";
import ErrorPage404 from "./pages/ErrorPage404/ErrorPage404";
import HomePage from "./pages/HomePage/HomePage";
import GameListPage from "./pages/GameListPage/GameListPage";
import RewardPage from "./pages/RewardPage/RewardPage";
import DemoPage from "./pages/DemoPage/DemoPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";

import { sendData, fetchApi } from "./services/api.service";

const baseUrlReward = "/api/rewards";
const baseGamesUrl = "/api/games";

const router = createBrowserRouter([
  {
    element: <App />,

    errorElement: <ErrorPage404 />,
    children: [
      { path: "/", element: <HomePage /> },
      {
        path: "/catalogue",
        element: <GameListPage />,
        loader: () => fetchApi(baseGamesUrl),
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
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/infos",
        element: <AboutUsPage />,
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

            const url = "/api/login";

            const response = await sendData(url, data, "POST");

            if (response.status === 200) {
              return redirect(`/`);
            }

            throw new Error("Invalid response from server");
          } catch (error) {
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

            const url = "/api/users";

            const response = await sendData(url, data, "POST");

            if (response.status === 201) {
              return redirect(`/connexion`);
            }

            throw new Error("Invalid response from server");
          } catch (error) {
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
