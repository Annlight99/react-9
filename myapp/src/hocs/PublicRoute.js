import React from "react";
import { Navigate } from "react-router-dom";


export default function PublicRoute({ auth, children }) {
  return !auth ? children : <Navigate to={"/dune"} replace />;
}