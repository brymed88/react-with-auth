<<<<<<< HEAD
import React, { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Signup } from '../../../utils/AuthUtil';
import SpinnerComponent from '../../common/spinner/SpinnerComponent';
import FormContext from './FormContext';
=======
import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Signup } from "../../../utils/AuthUtil";
import SpinnerComponent from "../../common/spinner/SpinnerComponent";
import FormContext from "./FormContext";
>>>>>>> f32209941ef862031edd98d776c0e88c365f9503

const SignupComponent = (props) => {
  //De-structure useForm import variables
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  //Get Form Context
  const [context, setContext] = useContext(FormContext);

  //Setup state variables for form functionality
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  //destructure callback function from prop
  const { callback } = props;

  const FormSubmit = async (data) => {
    //Reset submit status in case of past failure
    setSubmitError(false);

    //Set Loading spinner to true while form is processing
    setLoading(true);

    if (data.vpassword === data.password) {
      //Call util function to process api call for signup
      const response = await Signup(data);

      //Successful login, redirect user to dashboard
<<<<<<< HEAD
      if (response.status === 'success') {
=======
      if (response.status === "success") {
>>>>>>> f32209941ef862031edd98d776c0e88c365f9503
        //Add user email to context
        setContext(data.email);

        //Disable loading spinner as action is now complete
        setLoading(false);

        //Call back for parent function to proceed to email code verification
<<<<<<< HEAD
        callback('signup', 'verify');
=======
        callback("signup", "verify");
>>>>>>> f32209941ef862031edd98d776c0e88c365f9503
      } else {
        //Set form error for unsuccessful login
        setSubmitError(true);

        //Disable loading spinner as action is now complete
        setLoading(false);
      }
    } else {
      //Set React-Hook-form error for verify password not matching
<<<<<<< HEAD
      setError('vpassword', {
        type: 'manual',
        message: 'Passwords must match!',
=======
      setError("vpassword", {
        type: "manual",
        message: "Passwords must match!",
>>>>>>> f32209941ef862031edd98d776c0e88c365f9503
      });

      //Disable loading spinner as action is now complete
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(FormSubmit)}>
<<<<<<< HEAD
      {loading === true ? <SpinnerComponent type='full' size='100px' /> : ''}
=======
      {loading === true ? <SpinnerComponent type='full' size='100px' /> : ""}
>>>>>>> f32209941ef862031edd98d776c0e88c365f9503

      {submitError === true && (
        <span className='loginError'>
          {/*Check if password mismatch error is set, if not then display generic error*/}
          Signup Failed, please try again!
        </span>
      )}

      <div className='inputs'>
        <input
<<<<<<< HEAD
          {...register('email', {
=======
          {...register("email", {
>>>>>>> f32209941ef862031edd98d776c0e88c365f9503
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            },
          })}
          placeholder='Email'
        />

        {/* errors will return when field validation fails  */}
        {errors.email && (
          <span>This field is required - ex. email@email.com</span>
        )}
      </div>

      <div className='inputs'>
        <input
<<<<<<< HEAD
          {...register('password', { required: true })}
=======
          {...register("password", { required: true })}
>>>>>>> f32209941ef862031edd98d776c0e88c365f9503
          placeholder='Password'
        />
        {/* errors will return when field validation fails  */}
        {errors.password && <span>This field is required</span>}
      </div>

      {/* Add the Verify password field conditionally if form type is signup */}
      <div className='inputs'>
        <input
<<<<<<< HEAD
          {...register('vpassword', { required: true })}
=======
          {...register("vpassword", { required: true })}
>>>>>>> f32209941ef862031edd98d776c0e88c365f9503
          placeholder='Verify Password'
        />
        {errors.vpassword && (
          <span>
            {/*Check if password mismatch error is set, if not then display generic error*/}
            {errors.vpassword.message
              ? errors.vpassword.message
<<<<<<< HEAD
              : 'This field is required'}
=======
              : "This field is required"}
>>>>>>> f32209941ef862031edd98d776c0e88c365f9503
          </span>
        )}
      </div>

      <input type='submit' value='Signup' />
      <div className='signup_disclaimer'>
<<<<<<< HEAD
        By creating this account, you agree to our{' '}
=======
        By creating this account, you agree to our{" "}
>>>>>>> f32209941ef862031edd98d776c0e88c365f9503
        <Link to='/privacy'>Privacy Policy</Link>
      </div>
    </form>
  );
};
export default SignupComponent;
