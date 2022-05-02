import React, { useState } from "react";
import FormContext from "./FormContext";

import LoginComponent from "./LoginComponent";
import SignupComponent from "./SignupComponent";
import ResetComponent from "./ResetComponent";
import PassResetComponent from "./PassResetComponent";
import VerifyComponent from "./VerifyComponent";
import SuccessComponent from "./SuccessComponent";

import "./AccountComponent.min.css";

const AccountComponent = () => {
<<<<<<< HEAD
  const [context, setContext] = useState('default');

  //State for type of form
  const [formType, setFormType] = useState('login');
  const [prevFormType, setPrevFormType] = useState('login');
=======
  const [context, setContext] = useState("default");

  //State for type of form
  const [formType, setFormType] = useState("login");
  const [prevFormType, setPrevFormType] = useState("login");
>>>>>>> f32209941ef862031edd98d776c0e88c365f9503

  const nextStep = (prev, target) => {
    setPrevFormType(prev);
    setFormType(target);
  };

  let typeForm;

  switch (formType) {
<<<<<<< HEAD
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
=======
    case "login":
      typeForm = <LoginComponent callback={nextStep} />;
      break;
    case "signup":
      typeForm = <SignupComponent callback={nextStep} />;
      break;
    case "verify":
      typeForm = <VerifyComponent callback={nextStep} origin={prevFormType} />;
      break;
    case "reset":
      typeForm = <ResetComponent callback={nextStep} />;
      break;
    case "passreset":
      typeForm = <PassResetComponent callback={nextStep} />;
      break;
    case "success":
>>>>>>> f32209941ef862031edd98d776c0e88c365f9503
      typeForm = <SuccessComponent callback={nextStep} origin={prevFormType} />;
      break;
    default:
    //return nothing
  }

  return (
    <section className='account_component'>
      <div className='account_container'>
        {/*Only show tabs if the formtype is login or signup, else show back button*/}
<<<<<<< HEAD
        {formType === 'login' || formType === 'signup' ? (
          <div className='tabs'>
            <label
              className={formType !== 'login' ? 'label_not_selected' : ''}
              onClick={() => {
                nextStep('home', 'login');
=======
        {formType === "login" || formType === "signup" ? (
          <div className='tabs'>
            <label
              className={formType !== "login" ? "label_not_selected" : ""}
              onClick={() => {
                nextStep("home", "login");
>>>>>>> f32209941ef862031edd98d776c0e88c365f9503
              }}
              id='login'>
              Login
            </label>

            <label
<<<<<<< HEAD
              className={formType !== 'signup' ? 'label_not_selected' : ''}
              onClick={() => {
                nextStep('home', 'signup');
=======
              className={formType !== "signup" ? "label_not_selected" : ""}
              onClick={() => {
                nextStep("home", "signup");
>>>>>>> f32209941ef862031edd98d776c0e88c365f9503
              }}
              id='signup'>
              Signup
            </label>
          </div>
        ) : (
<<<<<<< HEAD
          formType === 'reset' && (
=======
          formType === "reset" && (
>>>>>>> f32209941ef862031edd98d776c0e88c365f9503
            <img
              className='back_btn'
              src='./back.svg'
              alt='back to the login'
              onClick={() => {
<<<<<<< HEAD
                nextStep('reset', 'login');
=======
                nextStep("reset", "login");
>>>>>>> f32209941ef862031edd98d776c0e88c365f9503
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
