import React from 'react';

import MobileCarousel from '../components/Home/MobileCarousel';
import Carousel from '../components/Home/MobileCarousel';
import About from '../components/Home/About';
import Portfolio from '../components/Home/Portfolio';
import Why from '../components/Home/Why';
import Testimonials from '../components/Home/Quote';
import Form from '../components/Form';
import Scroll from '../components/Home/Scroll'

const Home = () => {
    return (
        <div>
            <MobileCarousel/> 
            {/* <Carousel/>  */}
            <About/>
            <Portfolio/>
            <Why/>
            <Testimonials/>
            <Form/>
            <Scroll/>
        </div>
    );
}

export default Home;