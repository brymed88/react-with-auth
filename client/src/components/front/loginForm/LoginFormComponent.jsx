import { useState } from "react";
import { Link } from "react-router-dom";
import SpinnerComponent from "../../common/spinner/SpinnerComponent";
import ErrorComponent from "../../common/formError/ErrorComponent";
import './LoginComponent.min.css';

const LoginFormComponent = () => {

    const [loginType, setLoginType] = useState('login');
    const [email, setEmail] = useState('Email');
    const [password, setPassword] = useState('Password');
    const [passwordConf, setPasswordConf] = useState('Confirm Password');
    const [errorFlag, setErrorFlag] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = (event) => {
        //stop submit from acting like a normal form
        event.preventDefault();
        setErrorFlag('');

        //build object with form data
        const datObj = {
            eType: loginType,
            eAddress: email,
            ePass: password
        };

        if (datObj.eAddress !== 'Email' && datObj.eAddress !== '') {
            if (datObj.ePass !== 'Password' && datObj.ePass !== '') {

                if (datObj.eType === 'login') {
                    setLoading(true)
                    //call api for login
                }

                else if (datObj.eType === 'signup') {
                    if (datObj.ePass === passwordConf) {
                        setLoading(true);
                        // call api for signup
                    }
                    else {
                        setErrorFlag("Passwords Must Match!");
                    }
                }
            }
            else {
                setErrorFlag("Please enter a password!");
            }

        }
        else {
            setErrorFlag("Please enter a valid email address!");
        }


    }

    const typeChange = (e) => {

        setErrorFlag(''); // unset flag on type change
        (e.target.id !== 'login' ? setLoginType('signup') : setLoginType('login'))

    }

    const updateEmail = (event) => {
        setEmail(event.target.value)
    }

    const updatePass = (event) => {
        setPassword(event.target.value);
    }

    const updatePassConfirm = (event) => {
        setPasswordConf(event.target.value);
    }

    return (
        <section className=' login_form'>
            {loading === true
                ? <SpinnerComponent type='full' size='100px' />
                : ''
            }

            <form onSubmit={handleLogin}>

                <div className="tabs">
                    <label className={loginType !== 'login' ? 'label_not_selected' : ''} onClick={typeChange} id="login">Login</label>
                    <label className={loginType !== 'signup' ? 'label_not_selected' : ''} onClick={typeChange} id="signup" >Signup</label>
                </div>

                {(errorFlag !== '' && <ErrorComponent error={errorFlag} />)}

                <div className='inputs'>
                    <input type="email" onChange={updateEmail} placeholder="Email" id='email' />
                    <input type="password" onChange={updatePass} placeholder="Password" id='password' />

                    {loginType === 'signup'
                        && <input type="password" onChange={updatePassConfirm} placeholder="Confirm Password" id='confirm_password' />
                    }
                </div>

                <button type='submit'>
                    {loginType === 'login' ? 'Login' : 'Signup'}
                </button>

                {loginType === 'login'
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