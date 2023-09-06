import React, {useState, useRef} from 'react';

import '../CSS/Form.css'

import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import {RenderAlert} from './commons/Alert';

import emailjs from '@emailjs/browser';

import { validateSubmission } from './commons/utils';
import {isValidString} from './commons/validation';
import { messages } from './commons/messages';

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
    
    const [validated, setValidated] = useState(false);
    const [invalidInput, setInvalidInput] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const form = useRef();

    const handleRecommendationCheck = () => {

        setRecommendationChecked(true);

        if (isChecked){
            setIsChecked(!isChecked);
        }

        else if (socialMediaChecked) {
            setSocialMediaChecked(!socialMediaChecked);
        }

        else{
            setRecommendationChecked(!recommendationChecked);
        }

        setHDYFOAU("Recommendation");
    }

    const handleIsChecked = () => {
        
        setIsChecked(true);

        if (recommendationChecked) {
            setRecommendationChecked(!recommendationChecked);
        }

        else if (socialMediaChecked){
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

        else if (isChecked){
            setIsChecked(!isChecked);
        }

        else {
            setSocialMediaChecked(!socialMediaChecked);
        }

        setHDYFOAU("Social Media");
    }

    // const handleSubmit = (event) => {
        
    //     const form = event.currentTarget;
    //     let errorMessage = validateSubmission(firstName);
    //     setHDYFOAU()
    //     setErrorMessage(errorMessage);

    //     console.log(errorMessage);
        
    //     if (form.checkValidity() === false) {
    //         event.preventDefault();
    //         event.stopPropagation();
    //     }
      
    //     setValidated(true);
    // }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_b7pfg3u', 'template_bpuo3nh', form.current, 'bR_vQvzEQNeW8qqkX')
      .then((result) => {
          console.log(result.text);
          console.log("message sent");
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

    return (
        <div className="form-container border border-1 rounded">
            <div className='p-4'>
                <h3>Need a Quote?</h3>
                <p className="mt-2">If you would like a free quote, fill out the form and i'll get back to you!</p>
            </div>
            <Form ref={form} onSubmit={sendEmail} className="p-4" style={{width: '55%;'}}>

            <Row className="mb-3">
                <Col>
                    <Form.Label>First Name*</Form.Label>
                    <Form.Control 
                        placeholder="First name" 
                        name="first_name"/>
                </Col>
                <Col>
                    <Form.Label>Surname*</Form.Label>
                    <Form.Control 
                        placeholder="Last Name" 
                        name="surname"/>
                </Col>
            </Row>

            <Row className="mb-3">
                <Col>
                    <Form.Label>Phone Number*</Form.Label>
                    <Form.Control 
                        placeholder="Phone Number" 
                        name="number"/>
                </Col>
                <Col>
                    <Form.Label>Email*</Form.Label>
                    <Form.Control 
                        placeholder="Email"
                        name="user_email" 
                    />
                </Col>
            </Row>

            <Row className="mb-3">
                <Col>
                    <Form.Label>Address*</Form.Label>
                    <Form.Control 
                        placeholder="Address" 
                        name="address"/>
                </Col>
            </Row>

            <Row className="mb-3">
                <Col>
                    <Form.Label>Post Code*</Form.Label>
                    <Form.Control 
                        placeholder="Post Code" 
                        name="post_code"/>
                </Col>
                <Col>
                    <Form.Label>Area*</Form.Label>
                    <Form.Control 
                        placeholder="Area"
                        name="area" 
                    />
                </Col>
            </Row>

            <Row className='mb-3'>
                <Col>
                    <Form.Label>Message*</Form.Label>
                    <Form.Control 
                        placeholder="Message"
                        as="textarea" 
                        rows={3} 
                        name="message" 
                    />
                </Col>
            </Row>
            <Button type="submit" value="Send" variant="secondary">
                Submit
            </Button>{' '}
            </Form>
        </div>
    );
}

export default ContactForm;