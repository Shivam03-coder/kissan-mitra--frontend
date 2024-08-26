import React, { Suspense } from "react";
import "./Layout.css";
import { Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../routes/Approutes";
import PrivateRoute from "../routes/Privateroute";
import Mainloader from "./shared/apploaders/Mainloader";
import Navigationbar from "./shared/navbar/Navigationbar";

const Layout = () => {
  return (
    <Suspense fallback={<Mainloader />}>
      <Navigationbar />
      <Routes>
        {/*  PUBLIC ROUTES */}
        {publicRoutes.map(({ path, element }) => (
          <Route key={path} path={path} element={element}></Route>
        ))}

        {/* PRIVATE ROUTES */}

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
