import React, {useState, useEffect} from 'react';

import MobileCarousel from '../components/Home/MobileCarousel';
import Carousel from '../components/Home/Carousel';
import About from '../components/Home/About';
import Portfolio from '../components/Home/Portfolio';
import Why from '../components/Home/Why';
import Testimonials from '../components/Home/Quote';
import Form from '../components/Form';
import Scroll from '../components/Home/Scroll'

const Home = () => {

    const [isMobile, setIsMobile] = useState(false);

    const handleResize = () => {
        if (window.innerWidth < 500) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    } 
    
    useEffect(() => {
        window.addEventListener("resize", handleResize)
    })

    return (
        <div>

            {window.innerWidth <= 500 || isMobile 
                ? <MobileCarousel/> 
                : <Carousel/>
            }

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