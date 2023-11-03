import React from 'react';
import styled from 'styled-components'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';

const StyledIcon = styled(FontAwesomeIcon)`
    color: rgb(0, 191, 255) !important;
    font-size: 50px;
    margin-bottom: 1.5vw;
`;

const QuoteContainer = styled.div`

    padding-top: 9vw;
    padding-bottom: 6vw;
    text-align: center;

    @media only screen 
    and (max-width: 435px) 
    and (max-height: 940px)
    and (orientation: portrait){
        margin-top: 5vw;
    }
`;

const IconContainer = styled.div`
    margin-top: 3vw;
`;

const Content = styled.p`
    margin-top: 1.5vw;
`;

const ContentContainer = styled.div`
width: 100%
`;


const Why = () => {

    return (
        <Container fluid>
            <QuoteContainer>
                <h3>WHY CHOOSE C.LEWIS WINDOW CLEANERS?</h3>
                <IconContainer>
                    <Row className="justify-content-md-center p-4">
                            <Col xs={12} sm={6} md={4} className='p-2'>
                                <ContentContainer>
                                    <StyledIcon icon={faThumbsUp} />
                                    <h4>FULLY INSURED</h4>
                                    <Content>
                                        Protecting your home or business is part of my mission to
                                        provide a service you can rely on.
                                        Knowing I'm insured not only protects your home whilst I'm on the
                                        premises but also covers myself should anything happen.
                                    </Content>
                                </ContentContainer>
                            </Col>
    
                            <Col xs={12} sm={6} md={4} className='p-2'>
                                <ContentContainer>
                                    <StyledIcon icon={faUserFriends} />                                    <h4>FAMILY OWNED</h4>
                                    <Content>
                                        I know as well as anyone, home is the heart of your family.
                                        As a proud Dad, I understand the importance of this.
                                        Rest assured, I will be respectful and care for your home
                                        like it is my own!
                                    </Content>
                                </ContentContainer>
                            </Col>

                            <Col xs={12} sm={6} md={4} className='p-2'>
                                <ContentContainer>
                                    <StyledIcon icon={faCheckSquare} />
                                    <h4>MARK GUARANTEE</h4>
                                    <Content>
                                        Enjoy your shiny, clean windows knowing that if you find any spotting 
                                        or marking up to 24 hours after receiving a service,
                                        you can call myself to come back for a touch up, free of charge!
                                    </Content>
                                </ContentContainer>
                            </Col>

                    </Row>
                </IconContainer>
            </QuoteContainer>
        </Container>
    );
}

export default Why;