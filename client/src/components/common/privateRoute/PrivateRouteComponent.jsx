import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { VerifyJWTUtil } from '../../../utils/VerifyJWTUtil';
import SpinnerComponent from '../spinner/SpinnerComponent';

const PrivateRouteComponent = ({ children }) => {
  //Use state for user authorization
  const [isAuth, setIsAuth] = useState();

  //Verify JWT token on page load and set useState based on response
  useEffect(async () => {
    const isAuthorized = await VerifyJWTUtil();

    if (isAuthorized.status === 'success') {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, []);

  if (isAuth === true) {
    return <section className='dashboard'>{children}</section>;
  } else if (isAuth === false) {
    return <Navigate to='/login' />;
  } else {
    return <SpinnerComponent type='full' size='60px' />;
  }
};

export default PrivateRouteComponent;
