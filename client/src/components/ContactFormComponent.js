import { useState } from "react";
import axios from "axios";

import '../scss/ContactComponent.min.css';

const ContactFormComponent = () => {
    const [status, setStatus] = useState('Send');

    const contactSubmit = e => {
        e.preventDefault();

        //set status to empty (loading)
        setStatus('')

        const { name, email, message } = e.target.elements;
        let details = {
            name: name.value,
            email: email.value,
            message: message.value,
        };

        if (details.name !== '' && details.email !== '' && details.message !== '') {
            axios
                .post('/api/mail', details)
                .then(res => {
                    if (res.status === 200 && res.data.status === 'success') {
                        //set status to complete(thank you message)
                        setStatus('Email Sent!')
                    }
                    else {
                        setStatus('Failed to send message!')
                    }
                })
        }
    };
    return (
        <section className="contact_wrapper">
            <div className="contact_container" id="contact">
                <h2>Contact Me</h2>
                <form onSubmit={contactSubmit}>
                    <input type="text" id="name" placeholder="Name" />
                    <input type="email" id="email" placeholder="Email" />
                    <textarea id="message" placeholder="Topic of discussion" />
                    <button
                        className={status === '' ? 'btn btn_load' : status === 'Send' ? 'btn' : status === 'Email Sent!' ? 'btn btn_complete' : 'btn btn_failed'}
                    >{status}</button>
                </form>
            </div>
        </section >
    );
}
export default ContactFormComponent