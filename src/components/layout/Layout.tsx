import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Footer } from "./Footer";

export const Layout: React.FC = () => {
  const location = useLocation();
  const showFooter = ["/dashboard", "/request-feedback", "/journals"].includes(location.pathname);

  return (
    <div className="mobile-container bg-white">
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <Outlet />
        </main>
        {showFooter && <Footer />}
      </div>
    </div>
  );
};
