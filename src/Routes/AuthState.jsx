import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const AuthState = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    
    return !user ? <Outlet /> : <Navigate to={`/${user.role}-dashboard`} />;
}

export default AuthState;
