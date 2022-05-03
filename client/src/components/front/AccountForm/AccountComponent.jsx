import React, { useState } from 'react';
import FormContext from './FormContext';

import LoginComponent from './LoginComponent';
import SignupComponent from './SignupComponent';
import ResetComponent from './ResetComponent';
import PassResetComponent from './PassResetComponent';
import VerifyComponent from './VerifyComponent';
import SuccessComponent from './SuccessComponent';

import './AccountComponent.min.css';

const AccountComponent = () => {
  const [context, setContext] = useState('default');

  //State for type of form
  const [formType, setFormType] = useState('login');
  const [prevFormType, setPrevFormType] = useState('login');

  const nextStep = (prev, target) => {
    setPrevFormType(prev);
    setFormType(target);
  };

  let typeForm;

  switch (formType) {
    case 'login':
      typeForm = <LoginComponent callback={nextStep} />;
      break;
    case 'signup':
      typeForm = <SignupComponent callback={nextStep} />;
      break;
    case 'verify':
      typeForm = <VerifyComponent callback={nextStep} origin={prevFormType} />;
      break;
    case 'reset':
      typeForm = <ResetComponent callback={nextStep} />;
      break;
    case 'passreset':
      typeForm = <PassResetComponent callback={nextStep} />;
      break;
    case 'success':
      typeForm = <SuccessComponent callback={nextStep} origin={prevFormType} />;
      break;
    default:
    //return nothing
  }

  return (
    <section className='account_component'>
      <div className='account_container'>
        {/*Only show tabs if the formtype is login or signup, else show back button*/}
        {formType === 'login' || formType === 'signup' ? (
          <div className='tabs'>
            <label
              className={formType !== 'login' ? 'label_not_selected' : ''}
              onClick={() => {
                nextStep('home', 'login');
              }}
              id='login'>
              Login
            </label>

            <label
              className={formType !== 'signup' ? 'label_not_selected' : ''}
              onClick={() => {
                nextStep('home', 'signup');
              }}
              id='signup'>
              Signup
            </label>
          </div>
        ) : (
          formType === 'reset' && (
            <img
              className='back_btn'
              src='./back.svg'
              alt='back to the login'
              onClick={() => {
                nextStep('reset', 'login');
              }}
            />
          )
        )}

        {/*Wrap the form componets in the FormContext for saving user email state*/}
        <FormContext.Provider value={[context, setContext]}>
          {typeForm}
        </FormContext.Provider>
      </div>
    </section>
  );
};
export default AccountComponent;
