import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

import '../App.css';

import van from '../images/carousel/van.png';
import wc from '../images/carousel/wc1.jpg'
// import gc from '../images/carousel/gc4.jpg';
import gc from '../images/carousel/gc2.jpeg';


function AltCarousel() {
    return (<>
        <Carousel fade interval={3000}>
        <Carousel.Item>
            <img src={van} text="First slide" />
            <Carousel.Caption>
                <h4>COVERING PERTON, SHIFNAL, WHEATON ASTON AND MORE</h4>
                <h1>EXPERT WINDOW CLEANING</h1>
                    <Button variant="outline-light">Get a Quote</Button>{' '}
                    <Button variant="outline-light">Contact</Button>{' '}
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
            <img src={wc} text="Second slide" />
                <Carousel.Caption>
                    <h4>PRESSURE WASHING & CONSERVATORY CLEANING</h4>
                    <h1>LET ME LIGHT UP YOUR HOME</h1>
                    <h5>07391 853 506</h5>
                </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item>
            <img src={gc} text="First slide" />
                <Carousel.Caption>
                    <h4 className={"myH4"}> GUTTER & FASCIA CLEANING SERVICES</h4>
                    <h1>MAKING THINGS SHINE SINCE 2020</h1>
                    <Button variant="outline-light">Get a Quote</Button>{' '}
                    <Button variant="outline-light">Contact</Button>{' '}
                </Carousel.Caption>
        </Carousel.Item>
    </Carousel></>)
};

export default AltCarousel;