import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';

const PrivetRoute = ({ children }) => {
    const { user, loadding } = useContext(AuthContext)
    const location = useLocation();

    if (loadding) {
        return <div>loadding...</div>
    }
    if (user && user.uid) {
        return children
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>

};

export default PrivetRoute;