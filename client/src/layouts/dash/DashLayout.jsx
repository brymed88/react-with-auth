<<<<<<< HEAD
import Header from '../../pages/dash/parts/Header';
import { Outlet } from 'react-router-dom';
=======
import Header from "../../pages/dash/parts/Header";
import { Outlet } from "react-router-dom";
>>>>>>> f32209941ef862031edd98d776c0e88c365f9503

import "../../normalize.min.css";
import "./index.min.css";

const DashLayout = ({ children }) => {
  return (
    <div className='dash-wrapper'>
      <Header />
      <main className='dash-container'>
        <Outlet />
        {children}
      </main>
    </div>
  );
};

export default DashLayout;
