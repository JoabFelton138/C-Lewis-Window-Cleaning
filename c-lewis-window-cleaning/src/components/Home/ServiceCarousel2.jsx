import React from 'react';
import styled from 'styled-components'
import '../../CSS/ServiceCarousel2.css';

import {Container, Carousel} from 'react-bootstrap';

// import pw from '../../images/servicecarousel2/pw.jpg';
import x from '../../images/servicecarousel2/tools.jpg';
import wc from '../../images/servicecarousel2/twctwc.png';
import pw from '../../images/servicecarousel2/pw2-min.jpg';
import gc from '../../images/servicecarousel2/gc-min.jpg';

import SC2Slide from './SC2Slides';

function ServiceCarousel2 () {

    return (
        <>
            <Container fluid style={{backgroundColor: 'rgb(246, 246, 246)', height: 'auto'}}>
                <Carousel data-bs-theme="dark">

                    <Carousel.Item>
                        <SC2Slide 
                            imgSrc={pw}
                            title={'SLIDE 1'}
                            content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <SC2Slide 
                            imgSrc={x}
                            title={'SLIDE 2'}
                            content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <SC2Slide 
                            imgSrc={wc}
                            title={'SLIDE 3'}
                            content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <SC2Slide 
                            imgSrc={gc}
                            title={'SLIDE 4'}
                            content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
                        />
                    </Carousel.Item>

                </Carousel>
            </Container>
        </>
    )
}

export default ServiceCarousel2;