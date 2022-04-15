import Head from "../../pages/dash/parts/Head"
import Foot from "../../pages/dash/parts/Foot"
import { Outlet } from 'react-router-dom';

import '../../normalize.min.css';
import './index.min.css';

const DashLayout = ({ children }) => {

    return (
        <div>
            <Head />
            <div className="dash-container">
                <Outlet />
                {children}
            </div>
            <Foot />
        </div>
    );
}

export default DashLayout;