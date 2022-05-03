import Header from '../../pages/dash/parts/Header';
import { Outlet } from 'react-router-dom';

import '../../normalize.min.css';
import './index.min.css';

const DashLayout = ({ children }) => {
  return (
    <section className='dash-wrapper'>
      <Header />
      <main className='dash-container'>
        <Outlet />
        {children}
      </main>
    </section>
  );
};

export default DashLayout;
