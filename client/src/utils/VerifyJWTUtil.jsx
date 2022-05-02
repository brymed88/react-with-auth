import ApiCall from "./ApiCall";

//TODO this value will be removed depending on network setup.. If nginx with reverse proxy then irrelevant.
const serverURL = process.env.REACT_APP_SERVER_URL;

/*Calls api route and verifies local auth token is valid. If valid, returns success */
const VerifyJWTUtil = async () => {
  //Grab token from local storage
  const token = {
    token: JSON.parse(localStorage.token),
  };

  const response = await ApiCall(
    token,
    `${serverURL}/api/account/verify`,
    "POST"
  );

  //If token is valid
  if (response.status === "Valid Token") {
    return { status: "success" };
  }

  return { status: "failed" };
};
export { VerifyJWTUtil };
