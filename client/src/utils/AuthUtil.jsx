/*
* The below util functions remove the API query logic from the pages and components. 
*/

// apiCall function accepts a data object and endpoint, uses POST and returns the requested information.
//TODO put this value in a .env file or some other global variable
const serverURL = "http://192.168.1.199:3001"

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

const UserLogin = async (data) => {
    try {
        const response = await apiCall(data, `${serverURL}/api/account/login`);

        if (response.accessToken) {
            //User has successfully logged in put accesstoken in browser local storage and return success.
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

const Signup = () => {

}

const VerifyAuth = async (token) => {
    try {
        const response = await apiCall(token, `${serverURL}/api/account/verify`);
        console.log(response);

    }
    catch (err) {
        throw err;
    }
}


export {
    UserLogin,
    Signup,
    VerifyAuth
}
