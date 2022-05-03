import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { SendMessage } from '../../../utils/SendMessageUtil';
import './ContactComponent.min.css';
import SpinnerComponent from '../../common/spinner/SpinnerComponent';

const ContactFormComponent = () => {
  //De-structure useForm import variables
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //Setup state variables for form functionality
  const [status, setStatus] = useState('Send');
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const FormSubmit = async (data) => {
    setLoading(true);

    //Reset submit status in case of past failure
    setSubmitError(false);

    if (data) {
      //Call util function to process api call
      const response = await SendMessage(data);

      //Message successfully sent
      if (response.status === 'success') {
        //Disable loading spinner as action is now complete
        setLoading(false);

        //Set status of form to sent
        setStatus('Message Sent!');
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
          <input {...register('name', { required: true })} placeholder='Name' />
          {/* errors will return when field validation fails  */}
          {errors.name && <span>This field is required</span>}
        </div>

        <div className='inputs'>
          <input
            {...register('email', {
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
            {...register('topic', { required: true })}
            placeholder='Topic of discussion'
          />
          {/* errors will return when field validation fails  */}
          {errors.topic && <span>This field is required</span>}
        </div>

        {/* Change button styles based on form status */}
        <button
          className={
            status === 'Send'
              ? 'btn'
              : status === 'Message Sent!'
              ? 'btn btn_complete'
              : 'btn btn_failed'
          }>
          {status}
        </button>
      </form>
    </section>
  );
};
export default ContactFormComponent;
