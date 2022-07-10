import { Navigate } from "react-router-dom";

export const isAuth = () =>{
    if(!localStorage.getItem('user'))
        return [];
    return JSON.parse(localStorage.getItem('user'));
}

export const PrivateRouteIsAuth = ({ children}) => {
    const {user} = isAuth();
    const isAuthenticated = user;
    if (isAuthenticated ) {
      return children
    }
    return <Navigate to="/" />
}

export const PrivateRouteIsAdmin = ({ children}) => {
    const {user} = isAuth();
    if (user.role === 1 ) {
      return children
    }
    return <Navigate to="/" />
}