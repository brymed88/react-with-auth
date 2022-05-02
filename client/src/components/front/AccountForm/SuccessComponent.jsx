<<<<<<< HEAD
import React from 'react';
=======
import React from "react";
>>>>>>> f32209941ef862031edd98d776c0e88c365f9503

const SuccessComponent = (props) => {
  const { callback, origin } = props;

  let message;

  switch (origin) {
    case "verify":
      message = "Verification successful!";
      break;
    case "passreset":
      message = "Password reset successful!";
      break;
    default:
  }

  return (
    <section className='success_enroll'>
      <h2>{message}</h2>
      <input
        type='submit'
        onClick={() => {
<<<<<<< HEAD
          callback('success', 'login');
=======
          callback("success", "login");
>>>>>>> f32209941ef862031edd98d776c0e88c365f9503
        }}
        value='Please Login'
      />
    </section>
  );
};

export default SuccessComponent;
