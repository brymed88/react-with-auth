import { useState } from "react";

import '../scss/ContactComponent.min.css';
import SpinnerComponent from './SpinnerComponent';
import ErrorComponent from "./ErrorComponent";

const ContactFormComponent = () => {
    const [status, setStatus] = useState('Send');
    const [errorFlag, setErrorFlag] = useState('');
    const [name, setName] = useState('Name');
    const [email, setEmail] = useState('Email');
    const [topic, setTopic] = useState('Topic');
    const [loading, setLoading] = useState(false);

    const contactSubmit = e => {
        e.preventDefault();

        //build object with form data
        const datObj = {
            name: name,
            email: email,
            topic: topic
        };

        if (datObj.name !== 'Name' && datObj.name !== '') {
            if (datObj.email !== 'Email' && datObj.email !== '') {
                if (datObj.topic !== 'Topic' && datObj.topic !== '') {
                    setErrorFlag('');
                    setLoading(true);
                }
                else {
                    setErrorFlag('Please enter a valid topic!');
                }
            }
            else {
                setErrorFlag('Please enter a valid email!');
            }
        }
        else {
            setErrorFlag('Please enter a valid name!');
        }


    }

    const updateName = (e) => {
        setName(e.target.value)
    }

    const updateEmail = (e) => {
        setEmail(e.target.value)
    }
    const updateTopic = (e) => {
        setTopic(e.target.value)
    }

    return (
        <section className="contact_wrapper">
            {loading === true
                ? <SpinnerComponent type='full' size='100px' />
                : ''
            }
                <form onSubmit={contactSubmit}>
                <h2>Contact Me</h2>

                    {(errorFlag !== '' ? <ErrorComponent error={errorFlag} /> : '')}

                    <input type="text" id="name" placeholder="Name" onChange={updateName} />
                    <input type="email" id="email" placeholder="Email" onChange={updateEmail}/>
                    <textarea id="message" placeholder="Topic of discussion" onChange={updateTopic}/>
                    <button
                        className={status === 'Send' ? 'btn' : status === 'Message Sent!' ? 'btn btn_complete' : 'btn btn_failed'}
                    >{status}</button>

                </form>
        </section >
    );
}
export default ContactFormComponent