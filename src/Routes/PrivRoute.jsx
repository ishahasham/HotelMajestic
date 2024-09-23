import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';


const PrivRoute = ({ requiredRole }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user)

  if (!user) {
    return <Navigate to="/" />;
  }

  if (user.role !== requiredRole) {
    return <Navigate to={`/${user.role}-dashboard`} />;
  }

  return <Outlet />;
};




export default PrivRoute;
