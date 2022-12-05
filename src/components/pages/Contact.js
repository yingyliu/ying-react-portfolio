import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
    const [formState, setFormState] = useState({ name:'', email:'', message:'' });
    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!errorMessage) {
            setFormState({ [e.target.name]: e.target.value });
            console.log('Form', formState);
        }
    };

    const handleChange = (e) => {
        if (e.target.name === 'email' ) {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
    };

    return(
        <section>
            <h1 date-testid="h1tag">Contact Me</h1>
            <form id="contact-form">
                    <input type='text' placeholder='Name' name='name' defaultValue={name} onChange={handleChange} />
                    <input type='text' placeholder='Email' name='email' defaultValue={email} onChange={handleChange}/>
                    <textarea name='message' rows='5' placeholder='Message' defaultValue={message} onChange={handleChange}></textarea>
                    <button type="button" onClick={handleSubmit}>Submit</button>
            </form>
        </section>
    )
}

export default ContactForm;