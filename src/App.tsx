import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Enterotp, LoginSignup, SetupProfile, RequestFeedback, Journals } from "./routes";
import { Home } from "./screens/Home";
import { IntroCarousel } from "./screens/IntroCarousel";
import { SplashScreen } from "./screens/SplashScreen";
import { Dashboard } from "./screens/Dashboard/Dashboard"; // Corrected import path
import { Layout } from "./components/layout/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SplashScreen />,
  },
  {
    path: "/splash",
    element: <SplashScreen />,
  },
  {
    path: "/intro",
    element: <IntroCarousel />,
  },
  {
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/login",
        element: <LoginSignup />,
      },
      {
        path: "/enterotp",
        element: <Enterotp />,
      },
      {
        path: "/setup-profile",
        element: <SetupProfile />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/request-feedback",
        element: <RequestFeedback />,
      },
      {
        path: "/journals",
        element: <Journals />,
      },
      // Add routes for new FAB options if they lead to distinct pages
      {
        path: "/schedule-session",
        element: <div className="p-4 text-center">Schedule Session Page (Coming Soon!)</div>,
      },
    ],
  },
]);

export const App: React.FC = () => {
  return (
    <div className="app-container">
      <RouterProvider router={router} />
    </div>
  );
};
