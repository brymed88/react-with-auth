<<<<<<< HEAD
import React, { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import SpinnerComponent from '../../common/spinner/SpinnerComponent';
import { VerifyCode } from '../../../utils/AuthUtil';
import FormContext from './FormContext';
=======
import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import SpinnerComponent from "../../common/spinner/SpinnerComponent";
import { VerifyCode } from "../../../utils/AuthUtil";
import FormContext from "./FormContext";
>>>>>>> f32209941ef862031edd98d776c0e88c365f9503

const VerifyComponent = (props) => {
  //De-structure useForm import variables
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //Get Form Context
  const [context, setContext] = useContext(FormContext);

  //Setup state variables for form functionality
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  //destructure callback function from prop
  const { callback, origin } = props;

  const FormSubmit = async (data) => {
    //Reset submit status in case of past failure
    setSubmitError(false);

    //Set Loading spinner to true while form is processing
    setLoading(true);

    if (data) {
      //Add user email from context to data object before validation
      data.email = `${context}`;

      //Call util function to process api call
      const response = await VerifyCode(data);

      //Successful login, redirect user to dashboard
<<<<<<< HEAD
      if (response.status === 'success') {
=======
      if (response.status === "success") {
>>>>>>> f32209941ef862031edd98d776c0e88c365f9503
        //Disable loading spinner as action is now complete
        setLoading(false);

        switch (origin) {
          //if signup workflow
<<<<<<< HEAD
          case 'signup':
            callback('verify', 'success');
            break;
          //if pass reset workflow
          case 'reset':
            callback('verify', 'passreset');
=======
          case "signup":
            callback("verify", "success");
            break;
          //if pass reset workflow
          case "reset":
            callback("verify", "passreset");
>>>>>>> f32209941ef862031edd98d776c0e88c365f9503
            break;
          default:
        }
      } else {
        //Set form error for unsuccessful login
        setSubmitError(true);

        //Disable loading spinner as action is now complete
        setLoading(false);
      }
    }
  };

  return (
    <section className='verify'>
      <form onSubmit={handleSubmit(FormSubmit)}>
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
        <h2>Verification Sent!</h2>
        <p>
          Please enter the six-digit code that was sent to your email. This code
          will expire in 5 minutes.
        </p>

        <div className='inputs'>
          <input
<<<<<<< HEAD
            {...register('code', {
=======
            {...register("code", {
>>>>>>> f32209941ef862031edd98d776c0e88c365f9503
              required: true,
              pattern: {
                value: /^[0-9]{6}$/,
              },
            })}
            placeholder='Authorization Code'
          />

          {/* errors will return when field validation fails  */}
          {errors.code && <span>Please enter a 6 digit numeric code!</span>}
        </div>

        <input type='submit' value='Verify' />
      </form>
    </section>
  );
};
export default VerifyComponent;
