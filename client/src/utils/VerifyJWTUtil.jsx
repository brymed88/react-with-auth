import ApiCall from './ApiCall';
import { DeleteLocalAuth } from './LocalAuthUtil';

//Modify REACT_APP_SERVER_URL within the project .env file
const serverURL = process.env.REACT_APP_SERVER_URL;

/*Calls api route and verifies token is valid. If valid, returns success */
const VerifyJWTUtil = async () => {
  //Grab token from local storage
  const token = {
    token: JSON.parse(localStorage.token),
  };

  const response = await ApiCall(
    token,
    `${serverURL}/api/account/verify`,
    'POST'
  );

  //If token is valid
  if (response.status === 'Valid Token') {
    return { status: 'success' };
  } else {
    DeleteLocalAuth();
    return { status: 'failed' };
  }
};
export { VerifyJWTUtil };
