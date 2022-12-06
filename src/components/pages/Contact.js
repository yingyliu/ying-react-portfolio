import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../styles/Contact.css';

function ContactForm() {
   
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        // if the element that was "blurred" is FormBasicName or formBasicMsg or FormBasicEmail
        console.log(e.target.value); // sanity check
        // -- check if it is empty
        if (e.target.value === '') {
            // -- if it is, set it the error
            setErrorMessage('Name and Message is required.')
        } else {
            console.dir(e.target)
            if (e.target.id === 'formBasicEmail' ) {
                const isValid = validateEmail(e.target.value);
                if (!isValid) {
                    setErrorMessage('Your Email is invalid.');
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

        }
    };

    return(
        <section>
            <h1 date-testid="h1tag">Contact Me</h1>
            <Form className="contact-me-form">
            <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control onBlur={handleChange} type="input" placeholder="Name" />

            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control onBlur={handleChange} type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control onBlur={handleChange} type="input" placeholder="Message" />
            </Form.Group>
            <p>{errorMessage}</p>
            <Button variant="primary" type="submit">
            Submit
            </Button>
            </Form>
        </section>
    )
}

export default ContactForm;