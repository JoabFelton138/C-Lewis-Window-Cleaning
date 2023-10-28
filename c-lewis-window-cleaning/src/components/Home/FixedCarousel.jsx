import React from 'react';
import styled from 'styled-components'

import '../../CSS/FixedCarousel.css';

import van from '../../images/carousel/van5-min.jpg';
import cc from '../../images/carousel/cc-min.jpg';
import pw from '../../images/carousel/pw3-min.jpg';
import gc from '../../images/carousel/gc2-min.jpeg';

import CarouselButtons from './Button';
import Carousel from 'react-bootstrap/Carousel';

const InnerContainer = styled.div`
    text-align: center;
    position: absolute;
    top: 54%;
    left: 50%;
    transform: translate(-50% , -50%);
    width: 95%;
`;

const Slide = styled.div`
    background-position: center center;
    background-repeat: none;
    background-size: cover;
    color: white;
    height: 100vh;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.5)), 
    url(${props => props.src});
`;

const Header = styled.h1`
    padding-top: 3vw;
    line-height: 1em;
    font-size: 4.25em;
    font-weight: bold;
`;

const SubHeader = styled.h4`
    font-size: 22px;
    font-weight: bold;
`;

const ButtonContainer = styled.div`
    padding-top: 4vw;
`;

function FixedCarousel() {
    return (
        <>
            <Carousel fade>
                <Carousel.Item interval={5000}>
                    <Slide src={van} className="d-block w-100">
                        <InnerContainer>
                            <SubHeader>COVERING PERTON, SHIFNAL, WHEATON ASTON & MORE</SubHeader>
                            <Header>EXPERT WINDOW CLEANER</Header>
                            <ButtonContainer>
                                <CarouselButtons page={'wc'}/>
                            </ButtonContainer>
                        </InnerContainer>
                    </Slide>
                </Carousel.Item>

                <Carousel.Item interval={5000}>
                    <Slide src={cc} className="d-block w-100">
                        <InnerContainer>
                            <SubHeader >CONSERVATORY & SOLAR PANEL CLEANING</SubHeader>
                            <Header>LET ME LIGHT UP YOUR HOME</Header>
                            <ButtonContainer>
                                <CarouselButtons page={'cc'}/>
                            </ButtonContainer>
                        </InnerContainer>
                    </Slide>
                </Carousel.Item>

                <Carousel.Item interval={5000}>
                    <Slide src={pw} className="d-block w-100">
                        <InnerContainer>
                            <SubHeader >PRESSURE WASHING SERVICES</SubHeader>
                            <Header>LEAVE THE PRESSURE TO ME</Header>
                            <ButtonContainer>
                                <CarouselButtons page={'pw'}/>
                            </ButtonContainer>
                        </InnerContainer>
                    </Slide>
                </Carousel.Item>
           
                <Carousel.Item interval={5000}>
                    <Slide src={gc} className="d-block w-100">
                        <InnerContainer>
                            <SubHeader >GUTTERS & FASCIA CLEANING</SubHeader>
                            <Header>GUTTERS NEVER LOOKED SO GOOD</Header>
                            <ButtonContainer>
                                <CarouselButtons page={'gc'}/>
                            </ButtonContainer>
                        </InnerContainer>
                    </Slide>
                </Carousel.Item>

            </Carousel>
        </>
    )
};

export default FixedCarousel;