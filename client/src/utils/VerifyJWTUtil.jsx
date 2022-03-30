import ApiCall from "./ApiCall";

//TODO this value will be removed depending on network setup.. If nginx with reverse proxy then irrelevant.
const serverURL = process.env.REACT_APP_SERVER_URL;

/*Calls api route and verifies local auth token is valid. If valid, returns success */
const VerifyJWTUtil = () => {

    try {
        const token = localStorage.getItem("token");
        const response = await ApiCall(token, `${serverURL}/api/account/verify`, 'POST');

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
export default VerifyJWTUtil;