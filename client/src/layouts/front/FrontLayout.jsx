import Head from '../../pages/front/parts/Head';
import Foot from '../../pages/front/parts/Foot';
import { Outlet } from 'react-router-dom';

import "../../normalize.min.css";
import "./index.min.css";

const FrontLayout = (props) => {
  return (
    <div>
      <Head />
      <div className='page-container'>
        <Outlet />
        {props.children}
      </div>
      <Foot />
    </div>
  );
};

export default FrontLayout;
