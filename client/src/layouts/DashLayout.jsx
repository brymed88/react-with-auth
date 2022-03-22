import Head from "../pages/dash/parts/Head"
import Foot from "../pages/dash/parts/Foot"
import { Outlet } from 'react-router-dom';

const DashLayout = (props) => {

    return (
        <div>
            <Head />
            <div className="page-container">
                <Outlet />
                {props.children}
            </div>
            <Foot />
        </div>
    );
}

export default DashLayout;