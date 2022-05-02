<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';
import { VerifyLocalAuth } from '../../../utils/LocalAuthUtil';
=======
import React from "react";
import { Link } from "react-router-dom";
import { VerifyLocalAuth } from "../../../utils/LocalAuthUtil";
>>>>>>> f32209941ef862031edd98d776c0e88c365f9503

import "./Head.min.css";
import Logo from "../../../assets/common/logo.svg";

const Head = () => {
  const isLoggedIn = VerifyLocalAuth();

  // Declare a new state variable for button toggle and toggle className;
  const [btnTog, setBtnTog] = React.useState(false);

  const menuToggle = () => {
    btnTog === false ? setBtnTog(true) : setBtnTog(false);
  };

  return (
<<<<<<< HEAD
    <section className={(btnTog === true ? 'o_show' : 'o_hide') + ' header'}>
=======
    <section className={(btnTog === true ? "o_show" : "o_hide") + " header"}>
>>>>>>> f32209941ef862031edd98d776c0e88c365f9503
      <div className='topcontainer'>
        <Link to='/' className='brand'>
          <img src={Logo} alt='Logo' />
        </Link>
        <div
          id='myLinks'
<<<<<<< HEAD
          className={(btnTog === true ? 'visible' : '') + ' menu'}>
=======
          className={(btnTog === true ? "visible" : "") + " menu"}>
>>>>>>> f32209941ef862031edd98d776c0e88c365f9503
          <Link to='/' onClick={menuToggle}>
            Home
          </Link>
          <Link to='/about' onClick={menuToggle}>
            About
          </Link>
          <Link to='/contact' onClick={menuToggle}>
            Contact
          </Link>

          {/*If user logged in, display Account instead of Login/Singup*/}
<<<<<<< HEAD
          {isLoggedIn.status !== 'valid' ? (
=======
          {isLoggedIn.status !== "valid" ? (
>>>>>>> f32209941ef862031edd98d776c0e88c365f9503
            <Link to='/login' onClick={menuToggle}>
              Login / Signup
            </Link>
          ) : (
            <Link to='/dashboard' onClick={menuToggle}>
              Account
            </Link>
          )}
        </div>
        <button
          onClick={menuToggle}
<<<<<<< HEAD
          className={(btnTog === true ? 'rot' : '') + ' icon'}>
=======
          className={(btnTog === true ? "rot" : "") + " icon"}>
>>>>>>> f32209941ef862031edd98d776c0e88c365f9503
          +
        </button>
      </div>
    </section>
  );
};

export default Head;
