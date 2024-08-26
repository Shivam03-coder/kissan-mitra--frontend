import React, { Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../routes/Approutes";
import PrivateRoute from "../routes/Privateroute";
import Mainloader from "./shared/apploaders/Mainloader";
import Navigationbar from "./shared/navbar/Navigationbar";
import "./Layout.css";

const Layout = () => {
  const location = useLocation();

  return (
    <Suspense fallback={<Mainloader />}>
      {location.pathname !== "/" && <Navigationbar />}
      <Routes>
        {publicRoutes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
        {privateRoutes.map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={<PrivateRoute element={element} />}
          />
        ))}
      </Routes>
    </Suspense>
  );
};

export default Layout;
