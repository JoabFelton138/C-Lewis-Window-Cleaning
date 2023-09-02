import React from 'react';

import '../CSS/Form.css'

import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

const ContactForm = () => {
    return (
        <div className="form-container">
            <h3>Need a Quote?</h3>
            <p className="mt-2">If you would like a free quote, fill out the form and i'll get back to you!</p>
            <Form className="mt-5">
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="FirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="name" placeholder="First Name" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="Surname">
                    <Form.Label>Surname</Form.Label>
                    <Form.Control type="surname" placeholder="Surname" />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="PhoneNumber">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="number" placeholder="Phone Number" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="Email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email" />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGroupAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="Address" placeholder="Address" />
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="PostCode">
                    <Form.Label>Post Code</Form.Label>
                    <Form.Control type="postcode" placeholder="Post Code" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="Area">
                    <Form.Label>Area</Form.Label>
                    <Form.Control type="area" placeholder="Area" />
                    </Form.Group>
                </Row>
                <Form.Group className="mb-3" controlId="exampleForm.ControlHelp">
                    <Form.Label>How can I help?</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlHelp">
                    <Form.Label>How did you find out about CW Lewis WCS?</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
        </Form>
        <Button type="submit">Submit</Button>
        </div>
    );
}

export default ContactForm;