import React from 'react';
import styled from 'styled-components';

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

const AboutContainer = styled.div`
    margin: auto;
    text-align: center;
    width: 65%;
    margin-top: 5vw;
    margin-bottom: 5vw;
`;

const AboutImage = styled(Image)`
    width: 185px;
`;

const ContactIcons = styled(FontAwesomeIcon)`
    color: rgb(0, 191, 255) !important;
    font-size: 1.75rem;
`;

const Header = styled.h3`
    margin-top: 1vw;
`;

const Content = styled.p`
    line-height: 27px;
    margin-top: 2.5vw;
    margin-bottom: 2.5vw;
`;

const AboutMe = () => {

    return (
        <AboutContainer>
            <Container>
                <Row className="mx-auto">
                    <Col>
                        <AboutImage src={Chad} alt="chad" roundedCircle/>
                        <div>
                            <Header>MEET CHAD</Header>
                            <Content>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                                nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.
                            </Content>
                            <div className="d-flex justify-content-around">
                                <ContactIcons
                                    icon={faFacebookSquare}
                                    type="button"
                                    onClick={() => window.open("https://www.facebook.com/WCS.CLewis", "_blank")}
                                />

                                <a href="tel:447391853506">
                                    <ContactIcons icon={faPhone}/>
                                </a>
                                <a href="mailto:c.lewis.wcs@hotmail.com">
                                    <ContactIcons icon={faEnvelope}/>
                                </a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </AboutContainer>
    );
}

export default AboutMe;