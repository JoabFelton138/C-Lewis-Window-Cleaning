import React from 'react';

import '../../CSS/AltCarousel.css';

import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import van from '../../images/carousel/van.png';
import cc from '../../images/carousel/cc.jpg';
import gc from '../../images/carousel/gc2.jpeg'


function AltCarousel() {
    return (<>
        <Carousel fade>
            <Carousel.Item>
                <Image 
                    src={van} 
                    text="First slide"
                    className='d-block w-100'
                />
                <Carousel.Caption>
                    <h4>COVERING PERTON, SHIFNAL, WHEATON ASTON & MORE</h4>
                    <h1>EXPERT WINDOW CLEANERS</h1>
                    {window.innerWidth > 300
                    ?
                        <div className='button-div'>
                            <Button variant="outline-light">READ MORE</Button>{' '}
                            <Button variant="outline-light">GET A QUOTE</Button>{' '}
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
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <Image 
                    src={cc} 
                    text="Second slide"
                    className='d-block w-100'
                />
                <Carousel.Caption>
                    <h4 className=''>PRESSURE WASHING & CONSERVATORIES</h4>
                    <h1>LET ME LIGHT UP YOUR HOME</h1>
                    {window.innerWidth > 300
                    ?
                        <div className='button-div'>
                            <Button variant="outline-light">READ MORE</Button>{' '}
                            <Button variant="outline-light">GET A QUOTE</Button>{' '}
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
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <Image 
                    src={gc} 
                    text="First slide" 
                    className='d-block w-100'
                />
                <Carousel.Caption>
                    <h4 className=''>GUTTERS & FASCIAS</h4>
                    <h1>MAKING THINGS SHINE SINCE 2020</h1>
                    {window.innerWidth > 300
                    ?
                    <div className='button-div'>
                        <Button variant="outline-light">READ MORE</Button>{' '}
                        <Button variant="outline-light">GET A QUOTE</Button>{' '}
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
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </>)
};

export default AltCarousel;