import React from "react";
import { Link } from "react-router-dom";
import { VerifyLocalAuth } from "../../../utils/LocalAuthUtil";

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
    <section className={(btnTog === true ? "o_show" : "o_hide") + " header"}>
      <div className='topcontainer'>
        <Link to='/' className='brand'>
          <img src={Logo} alt='Logo' />
        </Link>
        <div
          id='myLinks'
          className={(btnTog === true ? "visible" : "") + " menu"}>
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
          {isLoggedIn.status !== "valid" ? (
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
          className={(btnTog === true ? "rot" : "") + " icon"}>
          +
        </button>
      </div>
    </section>
  );
};

export default Head;
