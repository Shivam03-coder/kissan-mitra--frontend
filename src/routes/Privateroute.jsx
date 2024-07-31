import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element: Component, ...rest }) => {
  const isUserAuthenticated = true;

  return isUserAuthenticated ? (
    <Component {...rest} />
  ) : (
    <Navigate to="/auth" />
  );
};

export default PrivateRoute;
