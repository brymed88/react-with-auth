/*
 * The below util functions remove the API query logic from the pages and components.
 */

import ApiCall from './ApiCall';

//TODO this value will be removed depending on network setup.. If nginx with reverse proxy then irrelevant.
const serverURL = process.env.REACT_APP_SERVER_URL;

/*Calls api route for account login. If valid, returns success and sets JWT token  in localstorage*/
const UserLogin = async (data) => {
  //TODO remove before prod
  console.log(data);

  const response = await ApiCall(
    data,
    `${serverURL}/api/account/login`,
<<<<<<< HEAD
    'POST'
=======
    "POST"
>>>>>>> f32209941ef862031edd98d776c0e88c365f9503
  );

  if (response.accessToken) {
    //User has successfully logged in. Put accesstoken in browser local storage and return success.
<<<<<<< HEAD
    localStorage.setItem('token', JSON.stringify(response.accessToken));
    return { status: 'success' };
  }

  return { status: 'failed' };
=======
    localStorage.setItem("token", JSON.stringify(response.accessToken));
    return { status: "success" };
  }

  return { status: "failed" };
>>>>>>> f32209941ef862031edd98d776c0e88c365f9503
};

/*Calls api route and creates user account and sends verification code to email. If valid, returns success*/
const Signup = async (data) => {
  //TODO remove before prod
  console.log(data);

  const response = await ApiCall(
    data,
    `${serverURL}/api/account/create`,
<<<<<<< HEAD
    'POST'
  );

  if (response.status === 'success') {
    return { status: 'success' };
  }

  return { status: 'failed' };
=======
    "POST"
  );

  if (response.status === "success") {
    return { status: "success" };
  }

  return { status: "failed" };
>>>>>>> f32209941ef862031edd98d776c0e88c365f9503
};

/*Calls api route and updates user account password. If successful, returns success */
const PassReset = async (data) => {
  //TODO remove before prod
  console.log(data);

  const response = await ApiCall(
    data,
    `${serverURL}/api/account/passreset`,
<<<<<<< HEAD
    'POST'
  );

  if (response.status === 'success') {
    return { status: 'success' };
  }

  return { status: 'failed' };
=======
    "POST"
  );

  if (response.status === "success") {
    return { status: "success" };
  }

  return { status: "failed" };
>>>>>>> f32209941ef862031edd98d776c0e88c365f9503
};

/*Calls api route and generates code token stored on account. If email is sent, returns success*/
const GenerateCode = async (data) => {
  //TODO remove before prod
  console.log(data);

  const response = await ApiCall(
    data,
    `${serverURL}/api/account/generateCode`,
<<<<<<< HEAD
    'POST'
  );

  if (response.status === 'success') {
    return { status: 'success' };
  }

  return { status: 'failed' };
=======
    "POST"
  );

  if (response.status === "success") {
    return { status: "success" };
  }

  return { status: "failed" };
>>>>>>> f32209941ef862031edd98d776c0e88c365f9503
};

/*Calls api route and verifies code token stored on account. If a match, returns success*/
const VerifyCode = async (data) => {
  //TODO remove before prod
  console.log(data);

  const response = await ApiCall(
    data,
    `${serverURL}/api/account/verifycode`,
<<<<<<< HEAD
    'POST'
  );

  if (response.status === 'success') {
    return { status: 'success' };
  }

  return { status: 'failed' };
=======
    "POST"
  );

  if (response.status === "success") {
    return { status: "success" };
  }

  return { status: "failed" };
>>>>>>> f32209941ef862031edd98d776c0e88c365f9503
};

export { UserLogin, Signup, PassReset, GenerateCode, VerifyCode };
