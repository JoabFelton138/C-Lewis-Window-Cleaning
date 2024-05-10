import React from 'react';
import styled from 'styled-components'

import {useNavigate} from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

import Button from 'react-bootstrap/Button';
import VanImg from '../../images/carousel/van.png';

const QuoteIcon = styled(FontAwesomeIcon)`
    font-size: 60px;
    color: white;

    @media only screen and (max-width: 600px) {
        font-size: 55px;
            color: white;
    }
`;

const BgImage = styled.div`
    height: 100vh;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${VanImg});
    background-position: center center;
    background-repeat: none;
    background-attachment: fixed;
    background-size: cover;
    position: relative;

    @media only screen and (max-width: 600px) {
        height: 85vh;    
    }

`;

const ContentContainer = styled.div`
    width: 50%;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50% , -50%);

    @media only screen and (max-width: 600px) {
            width: 70%;
        }
`;

const Header = styled.h1`
    margin-top: 1vw;
    line-height: 4vw;
    color: white;
    
    @media only screen and (max-width: 600px) {

        margin-top: 1vw;
                line-height: 8vw;  
        }
`;

const ButtonDiv = styled.div`
    margin-top: 2vw;

    @media only screen and (max-width: 600px) {
        margin-top: 5vw; 
    }
`;

const Quote = () => {

    const navigate = useNavigate();

    const navigateToTestimonials = () => {
        navigate("/testimonials");
    }

    return (
        <BgImage className="d-block w-100">
            <ContentContainer>
                <QuoteIcon icon={faQuoteLeft}/>
                <Header>
                    Great service, quality is amazing.
                    Always here when he says he will be,
                    extremely competitive with his prices!
                </Header>
                <ButtonDiv>
                    <Button variant="outline-light" onClick={navigateToTestimonials}>
                        TESTIMONIALS
                    </Button> 
                </ButtonDiv>
            </ContentContainer>
        </BgImage>
    );
}

export default Quote;