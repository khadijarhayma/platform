import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const AdminRoute = () => {
  const isadmin = localStorage.getItem("isadmin");

  return isadmin == "true" ? <Outlet /> : <Navigate to="/" />;
};

export default AdminRoute;
