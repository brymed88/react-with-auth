import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Login } from '../../../utils/AuthUtil';
import SpinnerComponent from '../../common/spinner/SpinnerComponent';

const LoginComponent = ({ callback }) => {
  //Assign useNavigate import to navigate from react-router-dom
  const navigate = useNavigate();

  //De-structure useForm import variables
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //Setup state variables for form functionality
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const FormSubmit = async (data) => {
    //Reset submit status in case of past failure
    setSubmitError(false);

    //Set Loading spinner to true while form is processing
    setLoading(true);

    if (data) {
      //Call util function to process api call
      const response = await Login(data);

      //Successful login, redirect user to dashboard
      if (response.status === 'success') {
        //Disable loading spinner as action is now complete
        setLoading(false);

        //Redirect to dashboard if login was successful
        navigate('/dashboard', { replace: true });
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
      {loading === true ? <SpinnerComponent type='full' size='100px' /> : ''}

      {submitError === true && (
        <span className='loginError'>
          {/*Check if password mismatch error is set, if not then display generic error*/}
          Login Unsuccessful, please try again!
        </span>
      )}
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
        <input
          {...register('password', { required: true, type: 'password' })}
          placeholder='Password'
        />
        {/* errors will return when field validation fails  */}
        {errors.password && <span>This field is required</span>}
      </div>

      <input type='submit' value='Login' />

      {/*Pass reset workflow link via callback function to parent */}
      <div>
        <span
          className='login_trouble'
          onClick={() => {
            callback('login', 'reset');
          }}
          id='reset'>
          Trouble logging in?
        </span>
      </div>
    </form>
  );
};
export default LoginComponent;
