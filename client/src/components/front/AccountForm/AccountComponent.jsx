import { useState } from 'react';

import LoginComponent from './login/LoginComponent';
import SignupComponent from './signup/SignupComponent';
import ResetComponent from './passReset/resetComponent';
import VerifyComponent from './verify/VerifyComponent';


const AccountComponent = () => {

    //State for type of form
    const [formType, setFormType] = useState('login');

    //Initialize typeForm variable for form components
    let typeForm;

    if (formType === 'login') {
        typeForm = <LoginComponent />
    }
    else if (formType === 'signup') {
        typeForm = <SignupComponent />
    }
    else if (formType === 'reset') {
        typeForm = <ResetComponent />
    }
    else if (formType === 'verify') {
        typeForm = <VerifyComponent />
    }

    function typeChange(e) {
        setFormType(e.target.id);
    }

    return (
        <section className="account_component">

            <div className="tabs">
                <label className={formType !== 'login' ? 'label_not_selected' : ''} onClick={typeChange} id="login">Login</label>
                <label className={formType !== 'signup' ? 'label_not_selected' : ''} onClick={typeChange} id="signup" >Signup</label>
            </div>
            {typeForm}

            {formType === 'login'
                ? <span className="sign_span">Not a member? <a onClick={typeChange} id='signup'>Signup now</a></span>
                : <span className="sign_span">Already a member? <a onClick={typeChange} id='login'>Login</a></span>
            }

        </section>
    )
}
export default AccountComponent;