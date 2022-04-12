import React from 'react';
import { Navigate } from 'react-router-dom';
import { VerifyLocalAuth } from '../../../utils/LocalAuthUtil';

const PrivateRouteComponent = ({ children }) => {

    const localAuth = VerifyLocalAuth();

    if (localAuth.status !== 'valid') {
        return <Navigate to="/login" />
    }
    return children;
}

export default PrivateRouteComponent;