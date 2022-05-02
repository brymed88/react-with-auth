import Header from '../../pages/dash/parts/Header';
import { Outlet } from 'react-router-dom';

import '../../normalize.min.css';
import './index.min.css';

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
