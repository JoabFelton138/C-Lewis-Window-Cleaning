import React, {useEffect, useState} from 'react';

import '../../CSS/FixedCarousel.css';

import CarouselButtons from './Button';

import Carousel from 'react-bootstrap/Carousel';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function FixedCarousel() {

    return (
        <>
            <Carousel fade>
                <Carousel.Item>
                    <div className="slide-one d-block w-100">
                        <div className="carousel-container">
                            <h4>COVERING PERTON, SHIFNAL, WHEATON ASTON & MORE</h4>
                            <h1>EXPERT WINDOW CLEANERS</h1>
                            <CarouselButtons page={'wc'}/>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="slide-two d-block w-100">
                        <div className="carousel-container">
                            <h4 className=''>PRESSURE WASHING & CONSERVATORIES</h4>
                            <h1>LET ME LIGHT UP YOUR HOME</h1>
                            <CarouselButtons page={'pw'}/>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="slide-three d-block w-100">
                        <div className="carousel-container">
                            <h4 className=''>GUTTERS & FASCIAS</h4>
                            <h1>MAKING THINGS SHINE SINCE 2020</h1>
                            <CarouselButtons page={'gc'}/>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </>
    )
};

export default FixedCarousel;