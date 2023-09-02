import React from 'react';

import Carousel from '../components/Home/AltCarousel';
import About from '../components/Home/About';
import Portfolio from '../components/Home/Portfolio';
import Why from '../components/Home/Why';
import Testimonials from '../components/Home/Quote';

const Home = () => {
    return (
        <div>
            <Carousel/>
            <About/>
            <Portfolio/>
            <Why/>
            <Testimonials/>
        </div>
    );
}

export default Home;