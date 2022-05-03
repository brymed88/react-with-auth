/*
 * The below util functions remove the API query logic from the pages and components.
 */

import ApiCall from './ApiCall';

//Modify REACT_APP_SERVER_URL within the project .env file
const serverURL = process.env.REACT_APP_SERVER_URL;

/*Calls api route for account login. If valid, returns success and sets JWT token  in localstorage*/
const Login = async (data) => {
  const response = await ApiCall(
    data,
    `${serverURL}/api/account/login`,
    'POST'
  );

  if (response.accessToken) {
    //User has successfully logged in. Put accesstoken in browser local storage and return success.
    localStorage.setItem('token', JSON.stringify(response.accessToken));
    return { status: 'success' };
  }

  return { status: 'failed' };
};

/*Calls api route and creates user account and sends verification code to email. If valid, returns success*/
const Signup = async (data) => {
  const response = await ApiCall(
    data,
    `${serverURL}/api/account/create`,
    'POST'
  );

  if (response.status === 'success') {
    return { status: 'success' };
  }

  return { status: 'failed' };
};

/*Calls api route and updates user account password. If successful, returns success */
const PassReset = async (data) => {
  const response = await ApiCall(
    data,
    `${serverURL}/api/account/passreset`,
    'POST'
  );

  if (response.status === 'success') {
    return { status: 'success' };
  }

  return { status: 'failed' };
};

/*Calls api route and generates code token stored on account. If email is sent, returns success*/
const GenerateCode = async (data) => {
  const response = await ApiCall(
    data,
    `${serverURL}/api/account/generateCode`,
    'POST'
  );

  if (response.status === 'success') {
    return { status: 'success' };
  }

  return { status: 'failed' };
};

/*Calls api route and verifies code token stored on account. If a match, returns success*/
const VerifyCode = async (data) => {
  const response = await ApiCall(
    data,
    `${serverURL}/api/account/verifycode`,
    'POST'
  );

  if (response.status === 'success') {
    return { status: 'success' };
  }

  return { status: 'failed' };
};

export { Login, Signup, PassReset, GenerateCode, VerifyCode };
