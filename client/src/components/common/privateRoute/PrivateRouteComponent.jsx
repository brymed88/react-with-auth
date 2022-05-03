import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { VerifyJWTUtil } from '../../../utils/VerifyJWTUtil';
import { VerifyLocalAuth } from '../../../utils/LocalAuthUtil';

import SpinnerComponent from '../spinner/SpinnerComponent';

const PrivateRouteComponent = ({ children }) => {
  const [isAuth, setIsAuth] = useState();

  //Verify JWT token on page load and set useState based on response
  useEffect(async () => {
    const localAuth = VerifyLocalAuth();

    //Check for local token first before api call
    if (localAuth.status === 'valid') {
      const serverAuth = await VerifyJWTUtil();

      if (serverAuth.status === 'success') {
        setIsAuth(true);
      } else {
        setIsAuth(false);
      }
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
