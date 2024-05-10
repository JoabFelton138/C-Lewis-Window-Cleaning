import React from 'react';
import styled from 'styled-components';

import Chad from '../../images/etc/chad2.png'

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

  
    @media only screen
    and (min-width: 355px)
    and (max-width: 435px)
    and (min-height: 665px)
    and (max-height: 940px)
    and (orientation: portrait)
    {
        width: 90%;
        margin-top: 10vw;
        margin-bottom: 8vw;
    }

    @media only screen
    and (max-width: 285px)
    and (max-height: 655px)
    and (orientation: portrait)
    {
        width: 85%;
        margin-top: 10vw;
        margin-bottom: 14vw;
    }

    @media only screen 
    and (max-width: 920px) 
    and (max-height: 420px) 
    and (orientation: landscape)
    {
        width: 90%;
        margin-top: 7vw;
        margin-bottom: 7vw;
    }

    @media only screen 
    and (max-width: 915px) 
    and (min-width: 765px)
    and (max-height: 1370px) 
    and (orientation: portrait){
        width: 70%;
        margin-top: 7.5vw;
        margin-bottom: 7.5vw;
    }

    @media only screen 
    and (max-width: 725px) 
    and (max-height: 545px) 
    {
        width: 70%;
        margin-top: 7.5vw;
        margin-bottom: 7.5vw;
    }

    @media only screen 
    and (max-width: 725px) 
    and (max-height: 545px) 
    {
        width: 70%;
        margin-top: 7.5vw;
        margin-bottom: 7.5vw;
    }

`;

const AboutImage = styled(Image)`
    width: 185px;

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
    color: rgb(0, 191, 255) !important;
    font-size: 1.75rem;

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
    margin-top: 1vw;

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
    margin-top: 2.5vw;
    margin-bottom: 2.5vw;

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
                <Row className="mx-auto">
                    <Col>
                        <AboutImage src={Chad} alt="chad" roundedCircle/>
                        <div>
                            <Header>MEET CHAD</Header>
                            <Content>
                                <p style={{textAlign: 'justify', marginTop: '2vw'}}>
                                In early 2021, I embarked on my journey in the exterior cleaning business. My unwavering mission has been to provide the local community with a professional, dependable, and high-quality service. I take immense pride in delivering exceptional results and cultivating a stellar reputation within my vicinity and beyond. Recognizing the significance of customer satisfaction, I’ve grown my business through word-of-mouth recommendations. This commitment fuels my determination to consistently offer the finest services possible.
                                </p>
                                <p style={{textAlign: 'justify'}}>
                                    I’m extremely passionate about building a great reputation within my local and surrounding areas.
                                    Understanding the importance of keeping my customers pleased has aloud me 
                                    to build and expand through recommendations. This is what keeps me working 
                                    hard and drives me to provide the best
                                    services that I possibly can.
                                </p>
                                <p style={{textAlign: 'justify', marginBottom: '4vw'}}>
                                If you have any questions on what I do, feel free to get in touch. You can call me, drop me an email or even get at me on Facebook, I'd love to hear from you!
                                </p>
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
                            </Content>
                        </div>
                    </Col>
                </Row>
            </Container>
        </AboutContainer>
    );
}

export default AboutMe;