import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import SpinnerComponent from '../../common/spinner/SpinnerComponent';

const VerifyComponent = (props) => {

    //De-structure useForm import variables
    const { register, handleSubmit,formState: { errors } } = useForm();

    //Setup state variables for form functionality
    const [loading, setLoading] = useState(false);
    const [submitError, setSubmitError] = useState(false);

    const FormSubmit = (data) => {

        //Reset submit status in case of past failure
        setSubmitError(false);

        //Set Loading spinner to true while form is processing
        setLoading(true);

        if (data) {

            //Call util function to process api call
            /*   UserLogin(data)
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
                   })*/
        }
    }

    return (

        <form onSubmit={handleSubmit(FormSubmit)}>

            {loading === true
                ? <SpinnerComponent type='full' size='100px' />
                : ''
            }

            {submitError === true &&
                <span className="loginError">
                    {/*Check if password mismatch error is set, if not then display generic error*/}
                    Verification unsuccessful, please try again!
                </span>
            }
            <p>An Authorization code has been sent to your email, please enter it below.</p>

            <div className="inputs">

                <input {...register("code",
                    {
                        required: true,
                        pattern: {
                            value: /^[0-9]{6}$/
                        },
                    }
                )} placeholder="Authorization Code" />

                {/* errors will return when field validation fails  */}
                {errors.code && <span>Please enter a 6 digit numeric code!</span>}

            </div>

            <input type="submit" value="Verify" />

        </form>

    );
}
export default VerifyComponent;