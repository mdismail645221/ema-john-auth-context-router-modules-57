import React, {useContext} from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/UseContext';

const PrivateRoute = ({ children }) => {
    const location = useLocation()
    const { user, loading } = useContext(AuthContext);

    {
        loading && <div>Loading...</div>
    }

    if (user && user.uid) {
        return children;
    } else {
        return <Navigate to='/login' state={{from: location}} replace></Navigate>
    }
};

export default PrivateRoute;