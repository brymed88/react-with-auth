<<<<<<< HEAD
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { PassReset } from '../../../utils/AuthUtil';
import SpinnerComponent from '../../common/spinner/SpinnerComponent';
import FormContext from './FormContext';
=======
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { PassReset } from "../../../utils/AuthUtil";
import SpinnerComponent from "../../common/spinner/SpinnerComponent";
import FormContext from "./FormContext";
>>>>>>> f32209941ef862031edd98d776c0e88c365f9503
const PassResetComponent = (props) => {
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
      //Build value object to send to api
      const values = { email: `${context}`, password: data.password };

      //Call util function to process api call for signup
      const response = await PassReset(values);

      //Successful login, redirect user to dashboard
<<<<<<< HEAD
      if (response.status === 'success') {
=======
      if (response.status === "success") {
>>>>>>> f32209941ef862031edd98d776c0e88c365f9503
        //Disable loading spinner as action is now complete
        setLoading(false);

        //Call back for parent function to proceed to success component
<<<<<<< HEAD
        callback('passreset', 'success');
=======
        callback("passreset", "success");
>>>>>>> f32209941ef862031edd98d776c0e88c365f9503
      } else {
        //Disable loading spinner as action is now complete
        setLoading(false);

        //Set form error for unsuccessful login
        setSubmitError(true);
      }
    } else {
      //Disable loading spinner as action is now complete
      setLoading(false);

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
    }
  };

  return (
    <form onSubmit={handleSubmit(FormSubmit)}>
<<<<<<< HEAD
      {loading === true ? <SpinnerComponent type='full' size='100px' /> : ''}
=======
      {loading === true ? <SpinnerComponent type='full' size='100px' /> : ""}
>>>>>>> f32209941ef862031edd98d776c0e88c365f9503
      <h2>Success! Enter new password</h2>
      {submitError === true && (
        <span className='loginError'>
          {/*Check if password mismatch error is set, if not then display generic error*/}
          Password reset failed, please try again!
        </span>
      )}

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
        {errors.password && <span>Field required</span>}
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
              : 'Field Required'}
=======
              : "Field Required"}
>>>>>>> f32209941ef862031edd98d776c0e88c365f9503
          </span>
        )}
      </div>

      <input type='submit' value='Signup' />
    </form>
  );
};

export default PassResetComponent;
