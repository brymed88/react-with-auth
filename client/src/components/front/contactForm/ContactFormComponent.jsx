import { useState } from "react";
import { useForm } from "react-hook-form";

import './ContactComponent.min.css';
import SpinnerComponent from '../../common/spinner/SpinnerComponent';

const ContactFormComponent = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [status, setStatus] = useState('Send');
    const [loading, setLoading] = useState(false);

    const FormSubmit = (data) => {
        console.log(data)
        setLoading(true);
    }

    return (
        <section className="contact_wrapper">
            {loading === true
                && <SpinnerComponent type='full' size='100px' />
            }

            <form onSubmit={handleSubmit(FormSubmit)}>

                <h2>Contact Me</h2>
                <input {...register("name", { required: true })} placeholder="Name" />
                {/* errors will return when field validation fails  */}
                {errors.name && <span>This field is required</span>}

                <input {...register("email", { required: true })} placeholder="Email" />
                {/* errors will return when field validation fails  */}
                {errors.email && <span>This field is required</span>}

                <textarea {...register("password", { required: true })} placeholder="Topic of discussion" />
                {/* errors will return when field validation fails  */}
                {errors.password && <span>This field is required</span>}

                {/* Change button styles based on form status */}
                <button
                    className={status === 'Send' ? 'btn' : status === 'Message Sent!' ? 'btn btn_complete' : 'btn btn_failed'}
                >{status}</button>

            </form>

        </section >
    );
}
export default ContactFormComponent