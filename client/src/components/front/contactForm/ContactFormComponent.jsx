import { useState } from "react";
import { useForm } from "react-hook-form";

import './ContactComponent.min.css';
import SpinnerComponent from '../../common/spinner/SpinnerComponent';

const ContactFormComponent = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [status, setStatus] = useState('Send');
    const [loading, setLoading] = useState(false);

    const FormSubmit = (data) => {
        setLoading(true);
    }

    return (
        <section className="contact_form">
            {loading === true
                && <SpinnerComponent type='full' size='100px' />
            }

            <form onSubmit={handleSubmit(FormSubmit)}>

                <h2>Contact Me</h2>
                <div className="inputs">
                    <input {...register("name", { required: true })} placeholder="Name" />
                    {/* errors will return when field validation fails  */}
                    {errors.name && <span>This field is required</span>}
                </div>

                <div className="inputs">
                    <input {...register("email",
                        {
                            required: true,
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                            }
                        }
                    )} placeholder="Email" />

                    {/* errors will return when field validation fails  */}
                    {errors.email && <span>This field is required - ex. email@email.com</span>}
                </div>

                <div className="inputs">
                    <textarea {...register("topic", { required: true })} placeholder="Topic of discussion" />
                    {/* errors will return when field validation fails  */}
                    {errors.topic && <span>This field is required</span>}

                </div>
                
                {/* Change button styles based on form status */}
                <button
                    className={status === 'Send' ? 'btn' : status === 'Message Sent!' ? 'btn btn_complete' : 'btn btn_failed'}
                >{status}</button>

            </form>

        </section >
    );
}
export default ContactFormComponent