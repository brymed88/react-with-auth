import React, { useContext, useState } from 'react'
import { useForm } from "react-hook-form";
import { PassReset } from '../../../utils/AuthUtil';
import SpinnerComponent from '../../common/spinner/SpinnerComponent';
import FormContext from './FormContext';
const PassResetComponent = (props) => {

    //De-structure useForm import variables
    const { register, handleSubmit, setError, formState: { errors } } = useForm();

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

            //Add user email from context to data object before validation
            data.email = `${context}`;

            //Call util function to process api call for signup
            const response = await PassReset(data);

            //Successful login, redirect user to dashboard
            if (response.status === 'success') {

                //Disable loading spinner as action is now complete
                setLoading(false);

                //Call back for parent function to proceed to success component
                callback('passreset', 'success');

            }
            else {

                //Disable loading spinner as action is now complete
                setLoading(false);

                //Set form error for unsuccessful login
                setSubmitError(true);

            }
        }
        else {

            //Disable loading spinner as action is now complete
            setLoading(false);

            //Set React-Hook-form error for verify password not matching
            setError("vpassword", { type: "manual", message: "Passwords must match!" });

        }
    }

    return (

        <form onSubmit={handleSubmit(FormSubmit)}>

            {loading === true
                ? <SpinnerComponent type='full' size='100px' />
                : ''
            }
            <h2>Success! Enter new password</h2>
            {submitError === true &&
                <span className="loginError">
                    {/*Check if password mismatch error is set, if not then display generic error*/}
                    Password reset failed, please try again!
                </span>
            }

            <div className="inputs">
                <input {...register("password", { required: true })} placeholder="Password" />
                {/* errors will return when field validation fails  */}
                {errors.password && <span>Field required</span>}
            </div>

            {/* Add the Verify password field conditionally if form type is signup */}
            <div className="inputs">
                <input {...register("vpassword", { required: true, })} placeholder="Verify Password" />
                {errors.vpassword &&
                    <span>
                        {/*Check if password mismatch error is set, if not then display generic error*/}
                        {errors.vpassword.message ? errors.vpassword.message : 'Field Required'}
                    </span>
                }
            </div>

            <input type="submit" value="Signup" />

        </form>

    )
}

export default PassResetComponent;