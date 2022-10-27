import React from 'react';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';

const PrivetRoute = ({ children }) => {
    const { user } = useContext(AuthContext)
    if (user && user.uid) {
        return children
    }
    return <Navigate to="/login"></Navigate>

};

export default PrivetRoute;