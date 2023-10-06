import React, {useEffect, useState} from 'react';

import '../../CSS/FixedCarousel.css';

import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function FixedCarousel() {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [screenHeight, setScreenHeight] = useState(window.innerHeight);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    React.useEffect(() => {
        function getScreenDimensions() {
            setScreenWidth(window.innerWidth)
            setScreenHeight(window.innerHeight)

            if (screenWidth <= 655 && screenHeight <= 300){
                setIsSmallScreen(true);
            }

            else {
                setIsSmallScreen(false);
            }
        }
        getScreenDimensions();
    })

    return (<>
        <Carousel fade>
            <Carousel.Item>
                <div className="slide-one d-block w-100">
                    <div className="carousel-container">
                    <h4>COVERING PERTON, SHIFNAL, WHEATON ASTON & MORE</h4>
                    <h1>EXPERT WINDOW CLEANERS</h1>
                    {window.innerWidth > 300
                    ?
                        <div className='button-div'>
                            <Button 
                                variant="outline-light"
                                size={isSmallScreen && "sm"}>
                                READ MORE
                            </Button>{' '}
                            <Button 
                                variant="outline-light"
                                size={isSmallScreen && "sm"}>
                                GET A QUOTE</Button>{' '}
                        </div>
                    :
                        <Row className="gy-2 p-4">
                            <Col md>
                                <Button variant="outline-light">READ MORE</Button>{' '}
                            </Col>
                            <Col md>
                                <Button variant="outline-light">GET A QUOTE</Button>{' '}
                            </Col>
                        </Row>
                    }
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="slide-two d-block w-100">
                    <div className="carousel-container">
                        <h4 className=''>PRESSURE WASHING & CONSERVATORIES</h4>
                        <h1>LET ME LIGHT UP YOUR HOME</h1>
                            {window.innerWidth >= 300
                            ?
                                <div className='button-div'>
                                    <Button 
                                        variant="outline-light"
                                        size={isSmallScreen && "sm"}>
                                        READ MORE
                                    </Button>{' '}
                                    <Button 
                                        variant="outline-light"
                                        size={isSmallScreen && "sm"}>
                                        GET A QUOTE
                                    </Button>{' '}
                                </div>
                            :
                                <Row className="gy-2 p-4">
                                    <Col md>
                                        <Button variant="outline-light">READ MORE</Button>{' '}
                                    </Col>
                                    <Col md>
                                        <Button variant="outline-light">GET A QUOTE</Button>{' '}
                                    </Col>
                                </Row>
                            }
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="slide-three d-block w-100">
                    <div className="carousel-container">
                        <h4 className=''>GUTTERS & FASCIAS</h4>
                        <h1>MAKING THINGS SHINE SINCE 2020</h1>
                        {window.innerWidth > 300
                        ?
                        <div className='button-div'>
                            <Button 
                                variant="outline-light"
                                size={isSmallScreen && "sm"}>
                                    READ MORE
                            </Button>{' '}
                            <Button 
                                variant="outline-light"
                                size={isSmallScreen && "sm"}>
                                GET A QUOTE
                            </Button>{' '}
                        </div>
                        :
                            <Row className="gy-2 p-4">
                                <Col md>
                                    <Button variant="outline-light">READ MORE</Button>{' '}
                                </Col>
                                <Col md>
                                    <Button variant="outline-light">GET A QUOTE</Button>{' '}
                                </Col>
                            </Row>
                        }
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>
    </>)
};

export default FixedCarousel;