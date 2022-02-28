import React from "react";
import axios from "axios";

const Login = () => {

    const [sLoginType, setSLoginType] = React.useState('login');
    const [sEmail, setSEmail] = React.useState('Email');
    const [sPass, setSPass] = React.useState('Password');
    const [sPassConf, setSPassConf] = React.useState('Confirm Password');
    const [sErrorFlag, setSErrorFlag] = React.useState('');

    const ErrorPop = () => {
        return (
            <div className="login_error">
                <p>{sErrorFlag.p}</p>
            </div>
        );
    }

    const handleLogin = (event) => {
        //stop submit from action like a normal form
        event.preventDefault();
        setSErrorFlag(''); // unset flag before logic

        //build array with form data
        const datObj = {
            eType: sLoginType,
            eAddress: sEmail,
            ePass: sPass
        };

        if (datObj.eType === 'login') {
            callApi(datObj)
        }
        else if (datObj.eType === 'signup') {
            if (datObj.ePass === sPassConf) {
                callApi(datObj);
            }
            else {
                setSErrorFlag({ p: "Passwords Must Match!" });
            }
        }

        function callApi(OBJ) {
            axios
                .post('http://127.0.0.1:3001/api/auth', OBJ, { withCredentials: true })
                .then(res => {

                })
        }

    }

    const typeChange = (event) => {

        setSErrorFlag(''); // unset flag on type change
        (event.target.id !== 'login' ? setSLoginType('signup') : setSLoginType('login'))

    }

    const updateEmail = (event) => {
        setSEmail(event.target.value)
    }

    const updatePass = (event) => {
        setSPass(event.target.value);
    }

    const updatePassConfirm = (event) => {
        setSPassConf(event.target.value);
    }



    return (
        <section className=' login_form'>
            <form onSubmit={handleLogin}>
                <div className="tabs">
                    <label className={sLoginType !== 'login' ? 'label_not_selected' : ''} htmlFor='login'>Login</label>
                    <input type="radio" onClick={typeChange} name='slide' id='login' defaultChecked={sLoginType === 'login' ? true : false} />
                    <label className={sLoginType !== 'signup' ? 'label_not_selected' : ''} htmlFor='signup'>Signup</label>
                    <input type='radio' onClick={typeChange} name='slide' id='signup' defaultChecked={sLoginType !== 'login' ? true : false} />
                </div>

                {(sErrorFlag !== '' ? <ErrorPop /> : '')}

                <div className='inputs'>
                    <input type="email" onChange={updateEmail} placeholder="Email" id='email' required />
                    <input type="password" onChange={updatePass} placeholder="Password" id='password' required />

                    {sLoginType === 'signup'
                        ? <input type="password" onChange={updatePassConfirm} placeholder="Confirm Password" id='confirm_password' required />
                        : ''
                    }
                </div>

                <button type='submit'>
                    {sLoginType === 'login' ? 'Login' : 'Signup'}
                </button>

                {sLoginType === 'login'
                    ? <span className="sign_span">Not a member? <a onClick={typeChange} id='signup'>Signup now</a></span>
                    : <span className="sign_span">Already a member? <a onClick={typeChange} id='login'>Login</a></span>
                }

                <div className="login_disclaimer">
                    By creating this account, you agree to our <a href='/privacy'>Privacy Policy</a>
                </div>

            </form>
        </section>

    );
}

export default Login;