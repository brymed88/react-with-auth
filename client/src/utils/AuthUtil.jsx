/*
* The below util functions remove the API query logic from the pages and components. 
*/

import ApiCall from "./ApiCall";

//TODO this value will be removed depending on network setup.. If nginx with reverse proxy then irrelevant.
const serverURL = process.env.REACT_APP_SERVER_URL;

/*Calls api route for account login. If valid, returns success and sets JWT token  in localstorage*/
const UserLogin = async (data) => {

    //TODO remove before prod
    console.log(data);

    try {
        const response = await ApiCall(data, `${serverURL}/api/account/login`, 'POST');
        if (response.accessToken) {
            //User has successfully logged in. Put accesstoken in browser local storage and return success.
            localStorage.setItem("token", JSON.stringify(response.accessToken));
            return { "status": "success" };
        }

        else {
            return { status: "failed" };
        }
    }
    catch (err) {
        throw err;
    }

}

/*Calls api route and creates user account and sends verification code to email. If valid, returns success*/
const Signup = async (data) => {

    //TODO remove before prod
    console.log(data);

    try {
        const response = await ApiCall(data, `${serverURL}/api/account/create`, 'POST');

        if (response.status === 'User created') {
            return { status: "success" };
        }
        else {
            return { status: "failed" };
        }

    }
    catch (err) {
        throw err;
    }
}

/*Calls api route and updates user account password. If successful, returns success */
const PassReset = async (data) => {

    //TODO remove before prod
    console.log(data);

    try {
        const response = await ApiCall(data, `${serverURL}/api/account/passreset`, 'POST');
        console.log(response);
        return { "status": "success" };
    }
    catch (err) {
        return { status: "failed" };
    }
}

/*Calls api route and generates code token stored on account. If email is sent, returns success*/
const SendCode = async (data) => {

    //TODO remove before prod
    console.log(data);

    try {
        const response = await ApiCall(data, `${serverURL}/api/account/codesend`, 'POST');
        console.log(response);
    }
    catch (err) {
        console.log(err);
        return { status: "failed" };
    }
}

/*Calls api route and verifies code token stored on account. If a match, returns success*/
const VerifyCode = async (data) => {

    //TODO remove before prod
    console.log(data);

    try {
        const response = await ApiCall(data, `${serverURL}/api/account/verifycode`, 'POST');

        if (response.status === 'success')
            return { status: 'success' };
        else
            return { status: 'invalid' };

    }
    catch (err) {
        console.log(err);
        return { status: "failed" };
    }
}


export {
    UserLogin,
    Signup,
    PassReset,
    SendCode,
    VerifyCode
}
