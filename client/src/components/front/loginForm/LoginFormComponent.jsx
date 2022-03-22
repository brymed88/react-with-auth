import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { UserLogin } from "../../../utils/AuthUtil";
import SpinnerComponent from "../../common/spinner/SpinnerComponent";

import './LoginComponent.min.css';

const LoginFormComponent = () => {

    const navigate = useNavigate();
    const { register, handleSubmit, setError, clearErrors, formState: { errors } } = useForm();

    const [formType, setFormType] = useState('login');
    const [loading, setLoading] = useState(false);
    const FormSubmit = (data) => {
        if (formType === 'login') {
            setLoading(true);

            if (data) {
                //Call helper function to process api call
                UserLogin(data)
                    .then(response => {

                        //Successful login, redirect user to dashboard
                        if (response.status === 'success') {
                            setLoading(false);
                            navigate("/dashboard", { replace: true });
                        }
                        else {
                            setLoading(false);
                            setError("flogin", { type: "manual", message: "Login Unsuccessful, please try again!" });
                        }
                    })
            }
        }
        else {
            if (data.vpassword === data.password) {
                console.log(data);
                //do fetch call
                setLoading(true);
            }
            else {
                setError("vpassword", { type: "manual", message: "Passwords must match!" });
            }
        }
    }

    const typeChange = (e) => {
        clearErrors();
        // Set formType state to either login or signup based on target id
        (e.target.id !== 'login' ? setFormType('signup') : setFormType('login'))
    }

    return (
        <section className='login_form'>
            {loading === true
                ? <SpinnerComponent type='full' size='100px' />
                : ''
            }

            <form onSubmit={handleSubmit(FormSubmit)}>
                <div className="tabs">
                    <label className={formType !== 'login' ? 'label_not_selected' : ''} onClick={typeChange} id="login">Login</label>
                    <label className={formType !== 'signup' ? 'label_not_selected' : ''} onClick={typeChange} id="signup" >Signup</label>
                </div>

                {errors.flogin &&
                    <span className="loginError">
                        {/*Check if password mismatch error is set, if not then display generic error*/}
                        {errors.flogin.message && errors.flogin.message}
                    </span>
                }

                <div className="inputs">
                    <input {...register("email", { required: true })} placeholder="Email" />
                    {/* errors will return when field validation fails  */}
                    {errors.email && <span>This field is required</span>}
                </div>

                <div className="inputs">
                    <input {...register("password", { required: true })} placeholder="Password" />
                    {/* errors will return when field validation fails  */}
                    {errors.password && <span>This field is required</span>}
                </div>

                {/* Add the Verify password field conditionally if form type is signup */}
                {formType === 'signup'
                    &&
                    <div className="inputs">
                        <input {...register("vpassword", { required: true })} placeholder="Verify Password" />
                        {errors.vpassword &&
                            <span>
                                {/*Check if password mismatch error is set, if not then display generic error*/}
                                {errors.vpassword.message ? errors.vpassword.message : 'This field is required'}
                            </span>
                        }
                    </div>
                }

                <input type="submit" value={formType === 'login' ? 'Login' : "Signup"} />

                {formType === 'login'
                    ? <span className="sign_span">Not a member? <a onClick={typeChange} id='signup'>Signup now</a></span>
                    : <span className="sign_span">Already a member? <a onClick={typeChange} id='login'>Login</a></span>
                }

                <div className="login_disclaimer">
                    By creating this account, you agree to our <Link to='/privacy'>Privacy Policy</Link>
                </div>
            </form>

        </section>

    );
}

export default LoginFormComponent;