import React, { useState, useRef } from 'react';

import '../CSS/Form.css'

import emailjs from '@emailjs/browser';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';

import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

const ContactForm = () => {

    const [firstName, setFirstName] = useState("");
    const [surname, setSurname] = useState("");
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [postCode, setPostCode] = useState("");
    const [area, setArea] = useState("");
    const [message, setMessage] = useState("");

    const [HDYFOAU, setHDYFOAU] = useState("");
    const [recommendationChecked, setRecommendationChecked] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [socialMediaChecked, setSocialMediaChecked] = useState(false);

    const [submissionSuccessful, setSubmissionSuccessful] = useState(false);
    const [submissionFailed, setSubmissionFailed] = useState(false);

    const [validated, setValidated] = useState(false);

    const form = useRef();

    const handleRecommendationCheck = () => {

        setRecommendationChecked(true);

        if (isChecked) {
            setIsChecked(!isChecked);
        }

        else if (socialMediaChecked) {
            setSocialMediaChecked(!socialMediaChecked);
        }

        else {
            setRecommendationChecked(!recommendationChecked);
        }

        setHDYFOAU("Recommendation");
    }

    const handleIsChecked = () => {

        setIsChecked(true);

        if (recommendationChecked) {
            setRecommendationChecked(!recommendationChecked);
        }

        else if (socialMediaChecked) {
            setSocialMediaChecked(!socialMediaChecked);
        }

        else {
            setIsChecked(!isChecked);
        }

        setHDYFOAU("Internet Search");

    }

    const handleSocialMediaChecked = () => {

        setSocialMediaChecked(true);

        if (recommendationChecked) {
            setRecommendationChecked(!recommendationChecked);
        }

        else if (isChecked) {
            setIsChecked(!isChecked);
        }

        else {
            setSocialMediaChecked(!socialMediaChecked);
        }

        setHDYFOAU("Social Media");
    }

    const sendEmail = (e) => {
        e.preventDefault();

        const form = e.currentTarget;

        setSubmissionSuccessful(false);
        setSubmissionFailed(false);
        
        if (form.checkValidity() === false) {
            setSubmissionFailed(true);
            e.preventDefault();
            e.stopPropagation();
            setValidated(true);
        }
    
        else {
            setValidated(false);
            emailjs.sendForm('service_b7pfg3u', 'template_bpuo3nh', form, 'bR_vQvzEQNeW8qqkX')
                .then((result) => {

                    console.log(result.text);

                    if (result.text === "OK") {
                        setSubmissionSuccessful(true);
                    }
                },

                (error) => {
                    console.log(error.text);
                    setSubmissionFailed(true);
                    e.preventDefault();
                    e.stopPropagation();
            });
        }

        form.reset();
        form.scrollIntoView({behavior: 'smooth'});
    };

    return (
        <div className="form-container border border-1 rounded">
            <Form 
                noValidate
                validated={validated}
                ref={form} 
                onSubmit={sendEmail} 
                className="p-4">
                    
                <div className='form-title-container'>
                    <h3>Need a Quote?</h3>
                    <p className="mt-2">If you would like a free quote, fill out the form and i'll get back to you!</p>
                </div>
                
                {submissionSuccessful &&
                    <div className="alert-container">
                        <Alert variant="success">
                            <div className="alert-div d-flex">
                                <FontAwesomeIcon icon={faCheckCircle}/>
                                <Alert.Heading>
                                    Thank you!
                                </Alert.Heading>
                            </div>
                            <hr />
                            <p className="p mb-0">
                                I'll be in touch soon, have a great day!
                            </p>
                        </Alert>
                    </div>}

                {submissionFailed &&
                    <div className="alert-container">
                        <Alert variant="danger">
                            <div className="alert-div d-flex">
                                <FontAwesomeIcon icon={faCircleExclamation}/>
                                <Alert.Heading>
                                    Something's not right...
                                </Alert.Heading>
                            </div>
                            <hr />
                            <p className="p mb-0">
                                Please review your submission and try again!
                            </p>
                        </Alert>
                    </div>
                }

                <div className="inner-form-container">
                    <Row className="mb-3">
                        <Col>
                            <Form.Label>
                                First Name*
                            </Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="First name"
                                name="first_name" />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid First Name.
                            </Form.Control.Feedback>
                        </Col>
                        <Col>
                            <Form.Label>Surname*</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Last Name"
                                name="surname" />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid Surname.
                            </Form.Control.Feedback>
                        </Col>
                    </Row>

                    <Row className="mb-3">
                        <Col>
                            <Form.Label>Number*</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Number"
                                name="number" />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid Phone Number.
                            </Form.Control.Feedback>
                        </Col>
                        <Col>
                            <Form.Label>Email*</Form.Label>
                            <Form.Control
                                required
                                type="email"
                                placeholder="Email"
                                name="user_email"
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid Email.
                            </Form.Control.Feedback>
                        </Col>
                    </Row>

                    <Row className="mb-3">
                        <Col>
                            <Form.Label>Address*</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Address"
                                name="address" />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid Address.
                            </Form.Control.Feedback>
                        </Col>
                    </Row>

                    <Row className="mb-3">
                        <Col>
                            <Form.Label>Post Code*</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Post Code"
                                name="post_code" />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid Post Code.
                            </Form.Control.Feedback>
                        </Col>
                        <Col>
                            <Form.Label>Area*</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Area"
                                name="area"
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid Area.
                            </Form.Control.Feedback>
                        </Col>
                    </Row>

                    <Row className='mb-3'>
                        <Col>
                            <Form.Label>Message*</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Message"
                                as="textarea"
                                rows={3}
                                name="message"
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide a message.
                            </Form.Control.Feedback>
                        </Col>
                    </Row>
                </div>

                <Button
                    type="submit"
                    value="Send"
                    variant="secondary"
                    className="mt-2">
                    Submit
                </Button>{' '}

            </Form>
        </div>
    );
}

export default ContactForm;