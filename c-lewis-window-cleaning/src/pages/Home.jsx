import React, {useRef} from 'react';

import Carousel from '../components/Home/FixedCarousel';
import About from '../components/Home/About';
import Portfolio from '../components/Home/Portfolio';
import Why from '../components/Home/Why';
import Testimonials from '../components/Home/Quote';
import Form from '../components/Form';
import Scroll from '../components/commons/Scroll';

const Home = () => {

    const ref = useRef(null);
    
    return (
        <div>
            <Carousel scrollingPoint={ref}/>
            <About/>
            <Portfolio/>
            <Why/>
            <Testimonials/> 
            <div className="scrolling-point" ref={ref}>
                <Form/>
            </div>
            <Scroll/>
        </div>
    );
}

export default Home;