import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../styles/Contact.css';

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
            <Form className="contact-me-form">
            <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="input" placeholder="Name" />
    
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Message</Form.Label>
        <Form.Control type="message" placeholder="Message" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

            {/* <form id="contact-form">
                    <input type='text' placeholder='Name' name='name' defaultValue={name} onChange={handleChange} />
                    <input type='text' placeholder='Email' name='email' defaultValue={email} onChange={handleChange}/>
                    <textarea name='message' rows='5' placeholder='Message' defaultValue={message} onChange={handleChange}></textarea>
                    <button type="button" onClick={handleSubmit}>Submit</button>
            </form> */}
        </section>
    )
}

export default ContactForm;