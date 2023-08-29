import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import van from '../images/carousel/van1.png';
import wc from '../images/carousel/wc1.jpg'
// import gc from '../images/carousel/gc4.jpg';
import gc from '../images/carousel/gc2.jpeg';


function ImageCarousel() {
    return (
        <div class="intro">
            <Carousel interval={4000} fade>
                <Carousel.Item>
                    <img src={van} class="" alt="First slide" />
                    <Carousel.Caption>
                        <div>
                            <h4>SERVING PERTON, SHIFNAL, WHEATON ASTON AND MORE</h4>
                            <h1>PROFESSIONAL WINDOW CLEANING</h1>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={wc} class="d-block w-100" alt="First slide" />
                    <Carousel.Caption>
                        <div>
                            <h4>SERVING PERTON, SHIFNAL, WHEATON ASTON AND MORE</h4>
                            <h1>CONSERVATORY CLEANING</h1>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={gc} class="d-block w-100" alt="First slide" />
                    <Carousel.Caption>
                        <div>
                            <h4>SERVING PERTON, SHIFNAL, WHEATON ASTON AND MORE</h4>
                            <h1>GUTTER CLEANING</h1>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default ImageCarousel;