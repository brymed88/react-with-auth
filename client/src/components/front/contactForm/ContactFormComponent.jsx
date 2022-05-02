import { useState } from 'react';
import { useForm } from 'react-hook-form';

import "./ContactComponent.min.css";
import SpinnerComponent from "../../common/spinner/SpinnerComponent";

const ContactFormComponent = () => {
  //De-structure useForm import variables
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //Setup state variables for form functionality
<<<<<<< HEAD
  const [status, setStatus] = useState('Send');
=======
  const [status, setStatus] = useState("Send");
>>>>>>> f32209941ef862031edd98d776c0e88c365f9503
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const FormSubmit = async (data) => {
    setLoading(true);

    //Reset submit status in case of past failure
    setSubmitError(false);

    if (data) {
      //Call util function to process api call
<<<<<<< HEAD
      const response = ''; //await UserLogin(data);

      //Successful login, redirect user to dashboard
      if (response === '') {
=======
      const response = ""; //await UserLogin(data);

      //Successful login, redirect user to dashboard
      if (response === "") {
>>>>>>> f32209941ef862031edd98d776c0e88c365f9503
        //Disable loading spinner as action is now complete
        setLoading(false);

        //Set status of form to sent
<<<<<<< HEAD
        setStatus('Message Sent!');
=======
        setStatus("Message Sent!");
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
    <section className='contact_form'>
      {loading === true && <SpinnerComponent type='full' size='100px' />}

      <form onSubmit={handleSubmit(FormSubmit)}>
        <h2>Contact Form</h2>

        {submitError === true && (
          <span className='loginError'>
            {/*Check if contact form is sent, if not display error*/}
            Issue sending form, please try again!
          </span>
        )}

        <div className='inputs'>
<<<<<<< HEAD
          <input {...register('name', { required: true })} placeholder='Name' />
=======
          <input {...register("name", { required: true })} placeholder='Name' />
>>>>>>> f32209941ef862031edd98d776c0e88c365f9503
          {/* errors will return when field validation fails  */}
          {errors.name && <span>This field is required</span>}
        </div>

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
          <textarea
<<<<<<< HEAD
            {...register('topic', { required: true })}
=======
            {...register("topic", { required: true })}
>>>>>>> f32209941ef862031edd98d776c0e88c365f9503
            placeholder='Topic of discussion'
          />
          {/* errors will return when field validation fails  */}
          {errors.topic && <span>This field is required</span>}
        </div>

        {/* Change button styles based on form status */}
        <button
          className={
<<<<<<< HEAD
            status === 'Send'
              ? 'btn'
              : status === 'Message Sent!'
              ? 'btn btn_complete'
              : 'btn btn_failed'
=======
            status === "Send"
              ? "btn"
              : status === "Message Sent!"
              ? "btn btn_complete"
              : "btn btn_failed"
>>>>>>> f32209941ef862031edd98d776c0e88c365f9503
          }>
          {status}
        </button>
      </form>
    </section>
  );
};
export default ContactFormComponent;
