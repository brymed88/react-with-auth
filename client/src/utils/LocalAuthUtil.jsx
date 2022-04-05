
/*The purpose of this function is to check if a local storage item exists for a previous login token
*This function does not validate the token but verifies there has been a recent login.
*/

const VerifyLocalAuth = () => {

    //Grab token from localstorage
    const token = localStorage.getItem("token");

    if (token) {
        return { "status": "valid" };
    }

    return { "status": "invalid" };

}

export { VerifyLocalAuth };