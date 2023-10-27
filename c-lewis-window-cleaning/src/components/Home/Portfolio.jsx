import React from 'react';
import styled from 'styled-components'

import { useNavigate } from 'react-router-dom';

import '../../CSS/Portfolio.css'
import gutter from '../../images/gallery/gutter1.jpeg'
import pw from '../../images/gallery/pw12.jpg'
import cc from '../../images/gallery/cc.jpeg'
import bwc from '../../images/gallery/bwc.jpg'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Image from 'react-bootstrap/Image';

const PortfolioContainer = styled.section`
    background-color: rgb(246, 246, 246);
    text-align: center;
    padding-bottom: 5vw;
    width: 100%;
`;

const PortfolioHeader = styled.section`
    padding-top: 10vw;
    text-align: center;
`;

const Subheader = styled.h6`
    padding-top: 2vw;
    font-weight: normal;
`;

const ButtonDiv = styled.section`
    margin-top: 2vw;
    margin-bottom: 3vw;
`;

const OverlayContainer = styled.section`
    position: relative;
    width: 100%;
`;

const ImageTitle = styled.section`
    font-size: 1.25em;
    font-weight: bold;
`;

const ImageDescription = styled.p`
    font-size: 1em;
    margin-top: 0.25em;
`;

const Portfolio = () => {

    const navigate = useNavigate();

    const navigateToPortfolio = () => {
        navigate("/portfolio");
    }

    return (

        <PortfolioContainer>
            <PortfolioHeader>
                <h3>MY PORTFOLIO</h3>
                <Subheader>I take great pride in my work, see for yourself!</Subheader>
            </PortfolioHeader>

            <Container>
                <Row className="pt-5 d-flex justify-content-center">
                    <Col lg={4} md={12} mb={3}>
                        <OverlayContainer>
                            <Image
                                src={cc}
                                className="image mb-3"
                                alt="Boat on Calm Water"
                            />
                            <div className='image-overlay'>
                                <ImageTitle>
                                    Conservatory cleaning in ?
                                </ImageTitle>
                                <ImageDescription>
                                    This is where we'll provide a description.
                                </ImageDescription>
                            </div>
                        </OverlayContainer>
                        <OverlayContainer>
                            <Image
                                src={gutter}
                                className="w-100 shadow-1-strong mb-3"
                                alt="Wintry Mountain Landscape"
                            />
                            <div className='image-overlay'>
                                <ImageTitle>
                                    Gutter Cleaning in ?
                                </ImageTitle>
                                <ImageDescription>
                                    This is where we'll provide a description.
                                </ImageDescription>
                            </div>
                        </OverlayContainer>
                    </Col>
                    <Col lg={4} md={12} mb={3}>
                        <OverlayContainer>
                            <Image
                                src={pw}
                                className="w-100 shadow-1-strong  mb-3"
                                alt="Mountains in the Clouds"
                            />
                            <div className='image-overlay'>
                                <ImageTitle>
                                    Pressure Washing in ?
                                </ImageTitle>
                                <ImageDescription>
                                    This is where we'll provide a description.
                                </ImageDescription>
                            </div>
                        </OverlayContainer>
                        <OverlayContainer>
                            <Image
                                src={bwc}
                                className="w-100 shadow-1-strong  mb-3"
                                alt="Boat on Calm Water"
                            />
                            <div className='image-overlay'>
                                <ImageTitle>
                                    Pressure Washing in ?
                                </ImageTitle>
                                <ImageDescription>
                                    This is where we provide a description.
                                </ImageDescription>
                            </div>
                        </OverlayContainer>
                    </Col>
                </Row>
            </Container>

            <ButtonDiv>
                <Button className="portfolio-button"
                    variant="outline-secondary"
                    onClick={navigateToPortfolio}>
                    VIEW PORTFOLIO
                </Button>
            </ButtonDiv>

        </PortfolioContainer>
    );
}

export default Portfolio;