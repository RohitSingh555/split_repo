import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ErrorPage from "./error-page";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import AboutUs from "./pages/About.jsx";
import App from "./App.jsx";
import Pricing from "./pages/pricing.jsx";
import LoginPage from "./pages/Authorization/Login.jsx";
import SignupPage from "./pages/Authorization/Signup.jsx";
import PreferencePage from "./pages/Authorization/Preference.jsx";
import OnboardingPreferencePage from "./pages/Authorization/OnboardingPreference.jsx";
import OnboardingQuestions from "./pages/Authorization/OnboardingQuestions.jsx";
import MainPage from "./pages/LandingPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
      },
      {
        path: "home",
        element: <MainPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "about",
        element: <AboutUs />,
        errorElement: <ErrorPage />,
      },
      {
        path: "pricing",
        element: <Pricing />,
        errorElement: <ErrorPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "preferences",
        element: <PreferencePage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "onboarding-preferences",
        element: <OnboardingPreferencePage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "onboarding-questions",
        element: <OnboardingQuestions />,
        errorElement: <ErrorPage />,
      },
      {
        path: "signup",
        element: <SignupPage />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
