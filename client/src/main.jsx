import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import App from "./App";
import ErrorPage404 from "./pages/ErrorPage404/ErrorPage404";
import HomePage from "./pages/HomePage/HomePage";
import GameListPage from "./pages/GameListPage/GameListPage";
import RewardPage from "./pages/RewardPage/RewardPage";
import DemoPage from "./pages/DemoPage/DemoPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";

import { fetchApi, handleFormAction, sendData } from "./services/api.service";
import login from "./services/login.service";
import register from "./services/register.service";
import favoriteGame from "./services/favoriteGame.service";
import sendEmail from "./services/contact.service";
import sendScore from "./services/score.service";
import AuthProtection from "./services/AuthProtection";
import decodeToken from "./services/decodeToken";

const baseUrlReward = "/api/rewards";
const baseGamesUrl = "/api/games";
const baseUserUrl = "/api/users";

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
        action: async ({ request }) => {
          const formData = await request.formData();
          const data = Object.fromEntries(formData.entries());
          // console.log(data);
          const result = await favoriteGame(data);

          if (result.success) {
            // console.log("let's go");
          }
          return null;
        },
      },
      {
        path: "/demo",
        element: (
          <AuthProtection>
            <DemoPage />
          </AuthProtection>
        ),
        action: async ({ request }) => {
          const formData = await request.formData();
          const score = formData.get("score");

          const token = localStorage.getItem("token");
          const userData = decodeToken(token);

          const requestData = {
            score,
            userId: userData.id,
            gameId: 1,
          };

          return sendScore(requestData);
        },
      },
      {
        path: "/prix",
        element: <RewardPage />,
        loader: () => fetchApi(`${baseUrlReward}`),
      },
      {
        path: "/contact",
        element: <ContactPage />,
        action: async ({ request }) =>
          handleFormAction(request, sendEmail, `/contact`),
      },
      {
        path: "/infos",
        element: <AboutUsPage />,
      },
      {
        path: "/connexion",
        element: <LoginPage />,
        action: async ({ request }) => {
          const result = await handleFormAction(request, login);
          if (result.success) {
            localStorage.setItem("token", result.auth.token);
            return redirect("/");
          }
          return null;
        },
      },
      {
        path: "/inscription",
        element: <RegistrationPage />,
        action: async ({ request }) =>
          handleFormAction(request, register, `/connexion`),
      },
      {
        path: "/profil/:id",
        element: (
          <AuthProtection>
            <ProfilePage />
          </AuthProtection>
        ),
        loader: () => fetchApi(baseUserUrl),
        action: async ({ request, params }) => {
          const formData = await request.formData();
          const data = Object.fromEntries(formData.entries());

          const method = request.method.toUpperCase();

          const handleMethod = async (httpMethod) => {
            await sendData(`${baseUserUrl}/${params.id}`, data, httpMethod);
          };
          await handleMethod(method);
          return redirect("/");
        },
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition:Bounce
    />
  </React.StrictMode>
);
