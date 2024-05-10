import React from 'react';

import Carousel from '../components/Home/FixedCarousel';
import About from '../components/Home/About copy';
import ServiceCarousel2 from '../components/Home/ServiceCarousel2';
import Portfolio from '../components/Home/Portfolio';
import Why from '../components/Home/Why';
import Testimonials from '../components/Home/Quote';
import Form from '../components/Home/GetAQuote';
import Scroll from '../components/commons/Scroll';

const Home = () => {
    
    return (
        <>
            <Carousel/>
            <About/>
            <ServiceCarousel2/>
            <Why/>
            <Portfolio/>
            <Testimonials/> 
            <Form/>
            <Scroll/>
        </>
    );
}

export default Home;