/*
* The below util functions remove the API query logic from the pages and components. 
*/

//TODO this value will be removed depending on network setup.. If nginx with reverse proxy then irrelevant.
const serverURL = "http://192.168.1.199:3001"

/*apiCall function accepts a data object and endpoint, uses POST and returns response in json format. */
const apiCall = async (data, endpoint) => {

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };

    const response = await fetch(endpoint, requestOptions)
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
        })
        .catch(error => {
            //TODO remove before build and deployment
            console.error('There was an error!', error);

            return { "status": "failed" }

        });
    return response;

}

/*Calls api route for account login. If valid, returns success and sets JWT token  in localstorage*/
const UserLogin = async (data) => {

    try {
        const response = await apiCall(data, `${serverURL}/api/account/login`);
        if (response.accessToken) {
            //User has successfully logged in. Put accesstoken in browser local storage and return success.
            localStorage.setItem("token", JSON.stringify(response.accessToken));
            return { "status": "success" };
        }

        else {
            return { "status": "failed" };
        }

    }
    catch (err) {
        throw err;
    }

}

/*Calls api route and creates user account and sends verification code to email. If valid, returns success*/
const Signup = async (data) => {

    try {
        const response = await apiCall(data, `${serverURL}/api/account/create`);
        if (response.status === 'success') {
            return { "status": "success" };
        }
        else {
            return { "status": "failed" };
        }
    }
    catch (err) {
        throw err;
    }
}

/*Calls api route and verifies local auth token is valid. If valid, returns success */
const VerifyAuth = async () => {

    try {
        const token = localStorage.getItem("token");
        const response = await apiCall(token, `${serverURL}/api/account/verify`);

        if (response.status === 'success') {
            return { "status": "success" };
        }
        else {
            return { "status": "failed" };
        }

    }
    catch (err) {
        throw err;
    }

}

/*Calls api route and updates user account password. If successful, returns success */
const PassReset = async (data) => {
    console.log(data)
    return { "status": "success" };
    /* try {
         const response = await apiCall(data, `${serverURL}/api/account/passreset`);
         console.log(response);
         return{"status":"success"};
     }
     catch (err) {
         throw err;
         return{"status":"failed"};
     }*/
}

/*Calls api route and generates code token stored on account. If email is sent, returns success*/
const SendCode = async (data) => {
    console.log(data)
    return { "status": "success" };
    /* try {
         const response = await apiCall(data, `${serverURL}/api/account/codesend`);
         console.log(response);
     }
     catch (err) {
         throw err;
     }*/
}

/*Calls api route and verifies code token stored on account. If a match, returns success*/
const VerifyCode = async (data) => {
    console.log(data);
    return { "status": "success" };

    /* try {
      const response = await apiCall(data, `${serverURL}/api/account/codeverify`);
      console.log(response);
  }
  catch (err) {
      throw err;
  }*/
}


export {
    UserLogin,
    Signup,
    PassReset,
    VerifyAuth,
    SendCode,
    VerifyCode
}
