import React from 'react';

import Carousel from '../components/Home/AltCarousel';
import About from '../components/Home/About';
import Portfolio from '../components/Home/Portfolio';
import Why from '../components/Home/Why';
import Testimonials from '../components/Home/Quote';
import Form from '../components/Form';

const Home = () => {
    return (
        <div>
            <Carousel/> 
            <About/>
            <Portfolio/>
            <Why/>
            <Testimonials/>
            <Form/>
        </div>
    );
}

export default Home;