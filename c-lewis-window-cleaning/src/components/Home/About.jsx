import React from 'react';
import Chad from '../../images/etc/chad2.png'
import '../../CSS/About.css';

import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

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
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                                nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.
                            </p>
                            <div className="icon-container d-flex justify-content-around">
                                <FontAwesomeIcon
                                    icon={faFacebookSquare}
                                    type="button"
                                    onClick={() => window.open("https://www.facebook.com/WCS.CLewis", "_blank")}
                                />

                                <a href="tel:447391853506">
                                    <FontAwesomeIcon icon={faPhone}/>
                                </a>
                                <a href="mailto:c.lewis.wcs@hotmail.com">
                                    <FontAwesomeIcon icon={faEnvelope}/>
                                </a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default AboutMe;