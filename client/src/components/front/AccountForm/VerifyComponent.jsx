import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import SpinnerComponent from '../../common/spinner/SpinnerComponent';

import { VerifyCode } from '../../../utils/AuthUtil';

const VerifyComponent = (props) => {

    //De-structure useForm import variables
    const { register, handleSubmit, formState: { errors } } = useForm();

    //Setup state variables for form functionality
    const [loading, setLoading] = useState(false);
    const [submitError, setSubmitError] = useState(false);

    //destructure callback function from prop
    const { callback } = props;

    const FormSubmit = (data) => {

        //Reset submit status in case of past failure
        setSubmitError(false);

        //Set Loading spinner to true while form is processing
        setLoading(true);

        if (data) {

            //Call util function to process api call
            VerifyCode(data)
                .then(response => {

                    //Successful login, redirect user to dashboard
                    if (response.status === 'success') {

                        //Disable loading spinner as action is now complete
                        setLoading(false);
                        callback('success');

                    }
                    else {

                        //Set form error for unsuccessful login
                        setSubmitError(true);

                        //Disable loading spinner as action is now complete
                        setLoading(false);

                    }
                })
        }
    }

    return (
        <section className="verify">
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
                <h2>Verification Sent!</h2>
                <p>Please enter the six-digit code that was sent to your email. This code will expire in 5 minutes.</p>

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
        </section>
    );
}
export default VerifyComponent;