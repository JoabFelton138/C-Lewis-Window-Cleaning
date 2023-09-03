import React, {useState} from 'react';

import '../CSS/Form.css'

import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

const ContactForm = () => {

    const [firstName, setFirstName] = useState("");
    const [surname, setSurname] = useState("");
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [postCode, setPostCode] = useState("");
    const [area, setArea] = useState("");
    const [message, setMessage] = useState("");

    return (
        <div className="form-container border border-1 rounded">
            <div className='p-4'>
                <h3>Need a Quote?</h3>
                <p className="mt-2">If you would like a free quote, fill out the form and i'll get back to you!</p>
            </div>
            <Form className="p-4">
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="FirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control 
                        type="name" 
                        placeholder="First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="Surname">
                    <Form.Label>Surname</Form.Label>
                    <Form.Control 
                        type="surname" 
                        placeholder="Surname" 
                        value={surname}
                        onChange={(e) => setSurname(e.target.value)}/>
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="PhoneNumber">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control 
                        placeholder="Phone Number" 
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="Email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGroupAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control 
                        type="Address" 
                        placeholder="Address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)} />
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="PostCode">
                    <Form.Label>Post Code</Form.Label>
                    <Form.Control 
                        type="postcode" 
                        placeholder="Post Code"
                        value={postCode}
                        onChange={(e) => setPostCode(e.target.value)} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="Area">
                    <Form.Label>Area</Form.Label>
                    <Form.Control 
                        type="area" 
                        placeholder="Area"
                        value={area}
                        onChange={(e) => setArea(e.target.value)} />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="exampleForm.ControlHelp">
                    <Form.Label>How can I help?</Form.Label>
                    <Form.Control 
                        as="textarea" 
                        rows={3} 
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}/>
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlHelp">
                    <Form.Label>How did you find out about CW Lewis WCS?</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
        </Form>

        <div className="p-4">
            <Button type="submit">Submit</Button>
        </div>
        </div>
    );
}

export default ContactForm;