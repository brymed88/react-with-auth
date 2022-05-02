<<<<<<< HEAD
import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { GenerateCode } from '../../../utils/AuthUtil';
import SpinnerComponent from '../../common/spinner/SpinnerComponent';
=======
import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { GenerateCode } from "../../../utils/AuthUtil";
import SpinnerComponent from "../../common/spinner/SpinnerComponent";
>>>>>>> f32209941ef862031edd98d776c0e88c365f9503

import FormContext from "./FormContext";
const ResetComponent = (props) => {
  //De-structure useForm import variables
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
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

    if (data) {
      //Call util function to process api call
      const response = await GenerateCode(data);

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

        //If the pass reset code has been sent to user and api returns successfull. Navigate to verify page.
<<<<<<< HEAD
        callback('reset', 'verify');
=======
        callback("reset", "verify");
>>>>>>> f32209941ef862031edd98d776c0e88c365f9503
      } else {
        //Set form error for unsuccessful login
        setSubmitError(true);

        //Disable loading spinner as action is now complete
        setLoading(false);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(FormSubmit)}>
      <h2>Password Reset</h2>

<<<<<<< HEAD
      {loading === true ? <SpinnerComponent type='full' size='100px' /> : ''}
=======
      {loading === true ? <SpinnerComponent type='full' size='100px' /> : ""}
>>>>>>> f32209941ef862031edd98d776c0e88c365f9503

      {submitError === true && (
        <span className='loginError'>
          {/*Check if password mismatch error is set, if not then display generic error*/}
          Verification unsuccessful, please try again!
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

      <input type='submit' value='Send' />
    </form>
  );
};
export default ResetComponent;
