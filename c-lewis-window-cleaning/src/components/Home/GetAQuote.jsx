import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';

import {useNavigate} from 'react-router-dom';

import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

import DangerAlert from '../commons/Alert';

const FormContainer = styled.div`
    width:60%;
    margin:0 auto;
    margin-top: 8vw;
    margin-bottom: 8vw;
    z-index: 1;

    @media only screen and (max-width: 500px) {
        width:90%;
        margin-top: 10vw;
        margin-bottom: 10vw;
    } 
`;

const InnerFormContainer = styled.div`
    padding-top: 2.5vw;
`;

const LoadingSpinner = styled(Spinner)`
    margin-right: 1vw;
`;

const GetAQuote = () => {

    const navigate = useNavigate();

    const navigateToThankYou = () => {
        navigate("/thank-you");
    }

    const [submissionSuccessful, setSubmissionSuccessful] = useState(false);
    const [submissionFailed, setSubmissionFailed] = useState(false);
    const [validated, setValidated] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const form = useRef();

    const sendEmail = (e) => {

        e.preventDefault();
        const form = e.currentTarget;

        setSubmissionSuccessful(false);
        setSubmissionFailed(false);

        setIsLoading(true);
        
        if (form.checkValidity() === false) {

            e.preventDefault();
            e.stopPropagation();
            setValidated(true);

            setIsLoading(false);
            setSubmissionFailed(true);
        }
    
        else {

            setValidated(false);

            emailjs.sendForm('service_quze6yw', 'template_bpuo3nh', form, 'bR_vQvzEQNeW8qqkX')
                .then((result) => {
                    
                    if (result.text === "OK") {
                        setIsLoading(false);
                        navigateToThankYou();
                    }
                },

                (error) => {
                    setSubmissionFailed(true);
                    e.preventDefault();
                    e.stopPropagation();
            });
        }

        form.reset();
        form.scrollIntoView({behavior: 'smooth'});
    };

    return (
        <div>
            <div style={{paddingTop: '2vw'}} id="target"/>
                <FormContainer className="border border-1 rounded">
                    <Form 
                        noValidate
                        validated={validated}
                        ref={form} 
                        onSubmit={sendEmail} 
                        className="p-4">
                            
                        <div>
                            <h3>Need a Quote?</h3>
                            <p className="mt-2">If you would like a free quote, fill out the form and i'll get back to you!</p>
                        </div>
                        
                        {submissionFailed &&
                            <DangerAlert/>
                        }

                        <InnerFormContainer>
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
                        </InnerFormContainer>

                        { isLoading ?
                            <Button
                                type="submit"
                                value="Send"
                                variant="secondary"
                                className="mt-2">
                                    <LoadingSpinner
                                            animation="border" 
                                            variant="light" 
                                            size="sm"
                                        />
                                    Loading...
                            </Button>
                            :

                            <Button
                                type="submit"
                                value="Send"
                                variant="secondary"
                                className="mt-2">
                                Submit
                            </Button>
                        }

                    </Form>
            </FormContainer>
        </div>
    );
}

export default GetAQuote;