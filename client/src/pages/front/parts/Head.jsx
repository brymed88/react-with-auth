import React from 'react';
import { Link } from 'react-router-dom';
import { VerifyLocalAuth } from '../../../utils/LocalAuthUtil';

import './Head.min.css';
import Logo from '../../../assets/common/logo.svg';

const Head = () => {
  const localAuth = VerifyLocalAuth();

  // Declare a new state variable for button toggle and toggle className;
  const [btnTog, setBtnTog] = React.useState(false);

  const menuToggle = () => {
    btnTog === false ? setBtnTog(true) : setBtnTog(false);
  };

  return (
    <section className={(btnTog === true ? 'o_show' : 'o_hide') + ' header'}>
      <div className='topcontainer'>
        <Link to='/' className='brand'>
          <img src={Logo} alt='Logo' />
        </Link>
        <nav
          id='myLinks'
          onClick={menuToggle}
          className={(btnTog === true && 'visible') + ' menu'}>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>

          {/*If user logged in, display Account instead of Login/Singup*/}
          {localAuth.status !== 'valid' ? (
            <Link to='/login'>Login / Signup</Link>
          ) : (
            <Link to='/dashboard'>Account</Link>
          )}
        </nav>
        <button
          onClick={menuToggle}
          className={(btnTog === true && 'rot') + ' icon'}>
          +
        </button>
      </div>
    </section>
  );
};

export default Head;
