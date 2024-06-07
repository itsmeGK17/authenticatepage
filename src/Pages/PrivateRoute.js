import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
const PrivateRoute = () => {
    const isAuth = localStorage.getItem("isLogin");

    if (isAuth) {
        return <Outlet />
    } else {
        return <Navigate to={"/"} />
    }
}

export default PrivateRoute
