import React from 'react';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';

const PrivetRoute = ({ children }) => {
    const { user, loadding } = useContext(AuthContext)
    if (loadding) {
        return <div>loadding...</div>
    }
    if (user && user.uid) {
        return children
    }
    return <Navigate to="/login"></Navigate>

};

export default PrivetRoute;