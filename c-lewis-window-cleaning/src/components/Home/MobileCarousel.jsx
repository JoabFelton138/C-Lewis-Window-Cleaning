import React from 'react';

import '../../CSS/AltCarousel.css';

import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import cc from '../../images/mobile-carousel/cc.jpg';

import van from '../../images/mobile-carousel/van.png';
// import van from '../../images/mobile-carousel/van4.jpg';

import gc1 from '../../images/mobile-carousel/gc1.png'
import gc2 from '../../images/mobile-carousel/gc2.png'
import gc3 from '../../images/mobile-carousel/gc3.png'


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
                    <h4 className='p-3'>COVERING PERTON, SHIFNAL, WHEATON ASTON & MORE</h4>
                    <h1>EXPERT WINDOW CLEANERS</h1>
                    <Container className="p-4">
                        <Row className="gy-2">
                            <Col md>
                                <Button variant="outline-light">READ MORE</Button>{' '}
                            </Col>
                            <Col md>
                                <Button variant="outline-light">GET A QUOTE</Button>{' '}
                            </Col>
                        </Row>
                    </Container>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image
                    src={cc}
                    text="Second slide"
                    className='d-block w-100'
                />
                <Carousel.Caption>
                    <h4 className='p-3'>PRESSURE WASHING & CONSERVATORIES</h4>
                    <h1>LET ME LIGHT UP YOUR HOME</h1>
                    <Container className="p-4">
                        <Row className="gy-2">
                            <Col md>
                                <Button variant="outline-light">READ MORE</Button>{' '}
                            </Col>
                            <Col md>
                                <Button variant="outline-light">GET A QUOTE</Button>{' '}
                            </Col>
                        </Row>
                    </Container>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image
                    src={gc3}
                    text="First slide"
                    className='d-block w-100'
                />
                <Carousel.Caption>
                    <h4 className='p-3'>GUTTERS & FASCIAS</h4>
                    <h1>MAKING THINGS SHINE SINCE 2020</h1>
                    <Container className="p-4">
                        <Row className="gy-2">
                            <Col md>
                                <Button variant="outline-light">READ MORE</Button>{' '}
                            </Col>
                            <Col md>
                                <Button variant="outline-light">GET A QUOTE</Button>{' '}
                            </Col>
                        </Row>
                    </Container>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </>)
};

export default AltCarousel;