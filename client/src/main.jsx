import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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

import { fetchApi, handleFormAction } from "./services/api.service";
import login from "./services/login.service";
import register from "./services/register.service";
import sendEmail from "./services/contact.service";
import { AuthProvider } from "./context/AuthContext";
import AuthProtection from "./services/AuthProtection";

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
        element: (
          <AuthProtection>
            <DemoPage />
          </AuthProtection>
        ),
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
        action: async ({ request }) => handleFormAction(request, login, `/`),
        // action: async ({ request }) => {
        //   const formData = await request.formData();
        //   const data = Object.fromEntries(formData.entries());
        //   const result = await login(data);

        //   if (result.success) {
        //     localStorage.setItem("token", result.auth.token);
        //     return redirect(`/`);
        //   }
        //   return null;
        // },
      },
      {
        path: "/inscription",
        element: <RegistrationPage />,
        action: async ({ request }) =>
          handleFormAction(request, register, `/connexion`),
      },
      {
        path: "/Profile",
        element: <ProfilePage />,
        loader: () => fetchApi(baseGamesUrl),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AuthProvider>
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
    </AuthProvider>
  </React.StrictMode>
);
