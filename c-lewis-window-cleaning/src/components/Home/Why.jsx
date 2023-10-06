import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { faDroplet } from '@fortawesome/free-solid-svg-icons';

import '../../CSS/Why.css';

const Why = () => {

    return (
        <Container fluid className='quote-container'>
            <h3>WHY CHOOSE C.LEWIS WINDOW CLEANERS?</h3>
            <Row className="icon-container content justify-content-md-center p-4">
                <Col xs={12} sm={6} md={4} className='p-2'>
                    <FontAwesomeIcon icon={faThumbsUp} />
                    <h4>FULLY INSURED</h4>
                    <p className="content-p">
                        Protecting your home or business is part of my mission to
                        provide a service you can rely on.
                        Knowing I'm insured not only protects your home whilst I'm on the
                        premises but also covers myself should anything happen.
                    </p>
                </Col>
                <Col xs={12} sm={6} md={4} className='p-2'>
                    <FontAwesomeIcon icon={faUserFriends} />
                    <h4>FAMILY OWNED</h4>
                    <p className="content-p">
                        I know as well as anyone, home is the heart of your family.
                        As a proud Dad, I understand the importance of this.
                        Rest assured, I will be respectful and care for your home
                        like it is my own!
                    </p>
                </Col>
                <Col xs={12} sm={6} md={4} className='p-2'>
                    <FontAwesomeIcon icon={faDroplet} />
                    <h4>RAIN GUARANTEE</h4>
                    <p className="content-p">
                        Enjoy your shiny, clean windows knowing that if any spotting occurs
                        from the rain, providing this should happen within 7 days of receiving service,
                        you can call myself to come back for a touch up free of charge.
                    </p>
                </Col>
            </Row>
        </Container>
    );
}

export default Why;