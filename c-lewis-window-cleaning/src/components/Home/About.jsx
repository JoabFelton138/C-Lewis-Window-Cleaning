import React from 'react';
import Chad from '../../images/etc/chad2.png'
import '../../CSS/About.css';

import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const AboutMe = () => {

    return (
        <div className='about'>
            <Container>
                <Row className="content mx-auto">
                    <Col>
                        <Image src={Chad} alt="chad" roundedCircle/>
                        <div className='content-div'>
                            <h3>MEET CHAD</h3>
                            <p>
                                Yeah, motherfuckers better know.
                                Huh, huh (I'm a bad, bad, bad).
                                Lock your windows, close your doors.
                                Biggie Smalls.
                                Huh, yeah.
                                (I'm a bad, bad, bad).

                                My man Inf left a TEC and a nine at my crib,
                                Turned him self in, he had to do a bid.
                                A one-to-three, he be home the end of '93.
                                I'm ready to get this paper, G, you with me?
                            </p>
                            <div class="icon-container d-flex justify-content-around">
                                <FontAwesomeIcon
                                    icon={faFacebookSquare}
                                    type="button"
                                    onClick={() => window.open("https://facebook.com", "_blank")}
                                />
                                <FontAwesomeIcon
                                    icon={faLinkedinIn} 
                                    type="button"
                                    onClick={() => window.open("https://linkedin.com", "_blank")}
                                />
                                <FontAwesomeIcon
                                    icon={faInstagram}
                                    type="button"
                                    onClick={() => window.open("https://instagram.com", "_blank")}
                                />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default AboutMe;