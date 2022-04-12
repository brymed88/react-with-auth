import { useState, useEffect } from "react";
import { VerifyJWTUtil } from '../../utils/VerifyJWTUtil';
import { Link } from 'react-router-dom';

import SpinnerComponent from '../../components/common/spinner/SpinnerComponent';

const Dashboard = ({children}) => {

    //Use state for user authorization
    const [isAuth, setIsAuth] = useState(false);

    //Use state for loading during auth call
    const [loading, setLoading] = useState(false);

    //Verify JWT token on page load and set useState based on response
    useEffect(async () => {

        setLoading(true);
        const isAuthorized = await VerifyJWTUtil();

        if (isAuthorized.status === 'success') {
            setIsAuth(true);
        }
        setLoading(false);

    }, []);


    if (loading === true) {

        return (
            <SpinnerComponent type="full" size='60px' />
        )

    }

    if (isAuth === true) {

        return (
            <section className="dashboard">
                <div>Dashboard</div>
            </section>
        )

    }
    else {

        return (
            <section>
                Not authorized, please <Link to="/login">login</Link>
            </section>

        )

    }

}
export default Dashboard;