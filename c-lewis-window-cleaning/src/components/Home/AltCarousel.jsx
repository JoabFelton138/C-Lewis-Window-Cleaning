import React from 'react';

import '../../CSS/AltCarousel.css';

import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

import van from '../../images/carousel/van.png';
import wc from '../../images/carousel/wc1.jpg'
import gc from '../../images/carousel/gc2.jpeg';

function AltCarousel() {
    return (<>
        <Carousel fade interval={3000}>
        <Carousel.Item>
            <Image src={van} text="First slide" fluid/>
            <Carousel.Caption>
                <h4>COVERING PERTON, SHIFNAL, WHEATON ASTON AND MORE</h4>
                <h1>EXPERT WINDOW CLEANING</h1>
                    <Button variant="outline-light">READ MORE</Button>{' '}
                    <Button variant="outline-light">GET A QUOTE</Button>{' '}
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
            <Image src={wc} text="Second slide" />
                <Carousel.Caption>
                    <h4>PRESSURE WASHING & CONSERVATORY CLEANING</h4>
                    <h1>LET ME LIGHT UP YOUR HOME</h1>
                        <Button variant="outline-light">READ MORE</Button>{' '}
                        <Button variant="outline-light">GET A QUOTE</Button>{' '}
                </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item>
            <Image src={gc} text="First slide" />
                <Carousel.Caption>
                    <div className="mt-5">
                        <h4>GUTTER & FASCIA CLEANING SERVICES</h4>
                        <h1>MAKING THINGS SHINE SINCE 2020</h1>
                            <Button variant="outline-light">READ MORE</Button>{' '}
                            <Button variant="outline-light">GET A QUOTE</Button>{' '}
                    </div>
                </Carousel.Caption>
        </Carousel.Item>
    </Carousel></>)
};

export default AltCarousel;