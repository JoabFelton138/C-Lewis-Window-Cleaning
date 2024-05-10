import React from 'react';
import styled from 'styled-components';

import Chad from '../../images/etc/chad2.png'

import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const AboutContainer = styled.div`
    margin: auto;
    text-align: center;
    margin-top: 5vw;
    margin-bottom: 5vw;
`;

const AboutImage = styled(Image)`
    width: 165px;
    margin-top: 2vw;

    @media only screen
    and (min-width: 355px)
    and (max-width: 435px)
    and (min-height: 665px)
    and (max-height: 940px)
    and (orientation: portrait)
    {
        width: 130px;
    }

    @media only screen
    and (max-width: 290px)
    and (max-height: 660px)
    and (orientation: portrait)
    {
        width: 125px;
    }

    @media only screen 
    and (max-width: 920px) 
    and (max-height: 420px) 
    and (orientation: landscape){
        width: 175px
    }

    @media only screen 
    and (max-width: 915px) 
    and (min-width: 765px)
    and (max-height: 1370px) 
    and (orientation: portrait){
        width: 150px
    }

    @media only screen 
    and (max-width: 725px) 
    and (max-height: 545px) 
    {
        width: 150px
    }

    @media only screen 
    and (max-width: 725px) 
    and (max-height: 545px) 
    {
        width: 150px
    }
`;

const ContactIcons = styled(FontAwesomeIcon)`

    margin-top: 1.5vw;
    font-size: 1.25rem;
    color: rgb(105,105,105);

    @media only screen
    and (min-width: 355px)
    and (max-width: 435px)
    and (min-height: 665px)
    and (max-height: 940px)
    and (orientation: portrait)
    {
        margin-top: 4vw;
        font-size: 1.5rem;
    }

    @media only screen
    and (max-width: 285px)
    and (max-height: 655px)
    and (orientation: portrait)
    {
            font-size: 1.5rem;
    }
`;

const Header = styled.h3`

    @media only screen
    and (min-width: 355px)
    and (max-width: 435px)
    and (min-height: 665px)
    and (max-height: 940px)
    and (orientation: portrait)
    {
        margin-top: 3vw;
    }

    @media only screen
    and (max-width: 285px)
    and (max-height: 655px)
    and (orientation: portrait)
    {
            margin-top: 5vw;
    }
`;

const Content = styled.div`
    p:first-child::first-letter {
        
        color: rgb(0, 191, 255);
        padding-right: 8px;
    

        -webkit-initial-letter: 3;
        initial-letter: 3;
        }

        @media only screen
        and (min-width: 355px)
        and (max-width: 435px)
        and (min-height: 665px)
        and (max-height: 940px)
        and (orientation: portrait)
        {
            margin-top: 5vw;
            margin-bottom: 8vw;
        }

        @media only screen
        and (max-width: 285px)
        and (max-height: 655px)
        and (orientation: portrait)
        {
                margin-top: 8vw;
                margin-bottom: 11vw;
        }
        @media only screen 
        and (max-width: 920px) 
        and (max-height: 420px) 
        and (orientation: landscape){
        margin-top: 4vw;
                margin-bottom: 5vw;
        }
        @media only screen 
        and (max-width: 915px) 
        and (min-width: 765px)
        and (max-height: 1370px) 
        and (orientation: portrait){
            margin-top: 4vw;
                margin-bottom: 5vw;
        }

        @media only screen 
        and (max-width: 725px) 
        and (max-height: 545px) 
        {
            margin-top: 4vw;
                margin-bottom: 5vw;
        }

        @media only screen 
        and (max-width: 725px) 
        and (max-height: 545px) 
        {
            margin-top: 4vw;
                margin-bottom: 5vw;
        }
`;

const AboutMe = () => {

    return (
        <AboutContainer>
            <Container>
                <Row className="d-flex justify-content-center">
                    <Col md={5} sm={8}>
                        <div>
                            <Content>
                                <p style={{textAlign: 'justify', marginTop: '2vw'}}>Hi, I'm Chad. In early 2021, I embarked on my journey in the exterior cleaning industry. My unwavering mission has been to provide professional, dependable, and high-quality services to the local community. </p>
                                <p style={{textAlign: 'justify', marginTop: '0.5vw'}}>I take immense pride in delivering exceptional results and cultivating a stellar reputation within my vicinity and beyond. Recognizing the importance of customer satisfaction, I’ve grown my business through word-of-mouth recommendations. This commitment fuels my determination to consistently offer the finest services possible.</p>
                                <p style={{textAlign: 'justify', marginTop: '0.5'}}>If you’re interested in experiencing exceptional exterior cleaning services, don’t hesitate to reach out. I’d love to connect with you!</p>
                            </Content>
                        </div>
                    </Col>
                    <Col md={3} >
                        <div>
                            <AboutImage src={Chad} alt="chad" roundedCircle/>
                        </div>
                        <div style={{marginTop: '1.5vw'}}>
                        <Row>
                            <Col>
                                <ContactIcons
                                    icon={faFacebookF}
                                    type="button"
                                    onClick={() => window.open("https://www.facebook.com/WCS.CLewis", "_blank")}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <a href="tel:447391853506">
                                    <ContactIcons icon={faPhone}/>
                                </a>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <a href="mailto:c.lewis.wcs@hotmail.com">
                                    <ContactIcons icon={faEnvelope}/>
                                </a>
                            </Col>
                        </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </AboutContainer>
    );
}

export default AboutMe;