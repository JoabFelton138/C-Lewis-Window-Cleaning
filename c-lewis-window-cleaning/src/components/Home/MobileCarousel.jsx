import React from 'react';

import '../../CSS/MobileCarousel.css';

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
        {/* <div className='first'>
            <img
                className='d-block w-100'
                style={{
                    height: '100vh',
                    filter: 'brightness(60%)'
                }}
                src={van}
            />
        </div> */}

        <Carousel fade>
            <Carousel.Item>
                <Image 
                    src={van} 
                    text="First slide"
                    className='d-block w-100'
                />
                <Carousel.Caption>
                    <h4 className='p-4'>COVERING PERTON, SHIFNAL, WHEATON ASTON & MORE</h4>
                    <h1>EXPERT WINDOW CLEANERS</h1>
                    <div className='p-5'>
                        <Button variant="outline-light">READ MORE</Button>{' '}
                        <Button variant="outline-light">GET A QUOTE</Button>{' '}
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image 
                    src={cc} 
                    text="Second slide"
                    className='d-block w-100'
                />
                <Carousel.Caption>
                    <h4 className='p-4'>PRESSURE WASHING & CONSERVATORY CLEANING</h4>
                    <h1>LET ME LIGHT UP YOUR HOME</h1>
                    <div className='p-5'>
                        <Button variant="outline-light">READ MORE</Button>{' '}
                        <Button variant="outline-light">GET A QUOTE</Button>{' '}
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image 
                    src={gc3} 
                    text="First slide" 
                    className='d-block w-100'
                />
                <Carousel.Caption>
                    <h4 className='p-4'>GUTTER & FASCIA CLEANING</h4>
                    <h1>MAKING THINGS SHINE SINCE 2020</h1>
                    <div className='p-5'>
                        <Button variant="outline-light">READ MORE</Button>{' '}
                        <Button variant="outline-light">GET A QUOTE</Button>{' '}
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </>)
};

export default AltCarousel;