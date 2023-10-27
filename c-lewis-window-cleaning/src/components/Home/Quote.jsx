import React from 'react';
import styled from 'styled-components'

import {useNavigate} from 'react-router-dom';

import '../../CSS/Quote.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

import Button from 'react-bootstrap/Button';
import VanImg from '../../images/carousel/van.png';

const BgImage = styled.section`
    height: 100vh;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${VanImg});
    background-position: center center;
    background-repeat: none;
    background-attachment: fixed;
    background-size: cover;
    position: relative;
`;

const ContentContainer = styled.section`
    width: 50%;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50% , -50%);
`;

const Header = styled.h1`
    margin-top: 1vw;
    line-height: 4vw;
    color: white;
    font-weight: bold;
`;

const ButtonDiv = styled.section`
    margin-top: 2vw;
`;

const Quote = () => {

    const navigate = useNavigate();

    const navigateToTestimonials = () => {
        navigate("/testimonials");
    }

    return (
        <BgImage className="d-block w-100">
            <ContentContainer>
                <FontAwesomeIcon icon={faQuoteLeft}/>
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