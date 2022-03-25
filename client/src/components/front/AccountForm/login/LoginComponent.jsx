import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import SpinnerComponent from '../../../common/spinner/SpinnerComponent';

const LoginComponent = (props) => {

    //Assign useNavigate import to navigate from react-router-dom
    const navigate = useNavigate();

    //De-structure useForm import variables
    const { register, handleSubmit, setError, clearErrors, formState: { errors } } = useForm();

    //Setup state variables for form functionality
    const [formType, setFormType] = useState('login');
    const [loading, setLoading] = useState(false);
    const [submitError, setSubmitError] = useState(false);

    const FormSubmit = (data) => {

        //Reset submit status in case of past failure
        setSubmitError(false);

        //Set Loading spinner to true while form is processing
        setLoading(true);

        if (data) {

            //Call util function to process api call
            /*                UserLogin(data)
                                .then(response => {
            
                                    //Successful login, redirect user to dashboard
                                    if (response.status === 'success') {
            
                                        //Disable loading spinner as action is now complete
                                        setLoading(false);
            
                                        //Redirect to dashboard if login was successful
                                        navigate("/dashboard", { replace: true });
            
                                    }
                                    else {
            
                                        //Set form error for unsuccessful login
                                        setSubmitError(true);
            
                                        //Disable loading spinner as action is now complete
                                        setLoading(false);
            
                                    } 
                                }) */
        }

        //Call util function to process api call
        /*      Signup(data)
                  .then(response => {
                      console.log(response)
                      //Successful login, redirect user to dashboard
                      if (response.status === 'success') {
 
                          //Disable loading spinner as action is now complete
                          setLoading(false);
 
                      }
                      else {
                          //Set form error for unsuccessful login
                          setSubmitError(true);
 
                          //Disable loading spinner as action is now complete
                          setLoading(false);
 
                      }
                  }) */
    }

    return (

        <section className='account_form'>
            {loading === true
                ? <SpinnerComponent type='full' size='100px' />
                : ''
            }

            <form onSubmit={handleSubmit(FormSubmit)}>

                {submitError === true &&
                    <span className="loginError">
                        {/*Check if password mismatch error is set, if not then display generic error*/}
                        Login Unsuccessful, please try again!
                    </span>
                }

                <div className="inputs">

                    <input {...register("email",
                        {
                            required: true,
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                            }
                        }
                    )} placeholder="Email" />

                    {/* errors will return when field validation fails  */}
                    {errors.email && <span>This field is required - ex. email@email.com</span>}

                </div>

                <div className="inputs">

                    <input {...register("password", { required: true })} placeholder="Password" />
                    {/* errors will return when field validation fails  */}
                    {errors.password && <span>This field is required</span>}

                </div>

                <input type="submit" value="Login" />

                <div>
                    Trouble logging in?
                </div>
            </form>

        </section>

    );
}
export default LoginComponent;