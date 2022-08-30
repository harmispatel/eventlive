import React from "react";
import { Route, Navigate, useNavigate,useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  let location = useLocation();
  //converts object to boolean ->false if null else true//
  const isAuthenticated = !!localStorage.getItem("token");
  return isAuthenticated ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};
export default PrivateRoute;
