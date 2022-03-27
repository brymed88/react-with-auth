import { useState } from 'react';

import LoginComponent from './LoginComponent';
import SignupComponent from './SignupComponent';
import ResetComponent from './ResetComponent';
import VerifyComponent from './VerifyComponent';
import SuccessComponent from './SuccessComponent';

import './AccountComponent.min.css';

const AccountComponent = () => {

    //State for type of form
    const [formType, setFormType] = useState('login');

    //Initialize typeForm variable for form components

    const nextStep = (e) => {
        setFormType(e);
    }

    let typeForm;

    switch (formType) {
        case 'login':
            typeForm = <LoginComponent callback={nextStep} />
            break;
        case 'signup':
            typeForm = <SignupComponent callback={nextStep} />
            break;
        case 'verify':
            typeForm = <VerifyComponent callback={nextStep} />
            break;
        case 'reset':
            typeForm = <ResetComponent callback={nextStep} />
            break;
        case 'success':
            typeForm = <SuccessComponent callback={nextStep} />
            break;
        default:
        //return nothing
    }

    return (
        <section className="account_component">
            <div className="account_container">

                {/*Only show tabs if the formtype is login or signup, else show back button*/}
                {(formType === 'login' || formType === 'signup')
                    ? <div className="tabs">
                        <label
                            className={
                                formType !== 'login' ? 'label_not_selected' : ''
                            }
                            onClick={
                                () => { nextStep('login') }
                            }
                            id="login">
                            Login
                        </label>

                        <label
                            className={
                                formType !== 'signup' ? 'label_not_selected' : ''
                            }
                            onClick={
                                () => { nextStep('signup') }
                            }
                            id="signup" >
                            Signup
                        </label>

                    </div>
                    : formType === 'reset'
                    && <div className="back_btn" >
                        <img src="./back.svg" alt="back to the login" onClick={() => { nextStep('login') }} />
                    </div>
                }

                {typeForm}

            </div>
        </section>
    )
}
export default AccountComponent;