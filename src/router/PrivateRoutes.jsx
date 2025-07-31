import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../components/Loading';

const PrivateRoutes = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <Loading></Loading>;
    }

    if (!user) {
        return <Navigate to='/auth/login' state={{ from: location }} replace></Navigate>
    }

    if (user) {
        return children
    }
    return (
        <Navigate to="/auth/login"></Navigate>
        // children
    );
};

export default PrivateRoutes;