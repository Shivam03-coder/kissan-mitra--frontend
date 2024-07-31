import React, { Suspense } from "react";
import "./Layout.css";
import { Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../routes/Approutes";
import PrivateRoute from "../routes/Privateroute";

const Layout = () => {
  return (
    <Suspense>
      <Routes>
        {/*  PUBLIC ROUTES */}
        {publicRoutes.map(({ path, element, children }) => (
          <Route key={path} path={path} element={element}>
            {children &&
              children.map(({ path: childPath, element: childElement }) => (
                <Route
                  key={childPath}
                  path={childPath}
                  element={childElement}
                  index
                />
              ))}
          </Route>
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
