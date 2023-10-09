import React from 'react';
import '../../CSS/Services/Hero.css';
import cc from '../../images/carousel/cc.jpg'
import gc from '../../images/carousel/gc2.jpeg'

const heroImages = [
    {
        title: "cc",
        src: cc
    },
    {
        title: "gc",
        src: gc
    }
];

const Hero = (props) =>{

    let x = heroImages[props.source];

    return(
        <div className='hero-container'  
          
             style={{
                 backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), 
                                 rgba(0, 0, 0, 0.4)), 
                                 url(${x.src})`,
             }}
        >

            <div className="hero-text">
                <h1>WEST MIDLANDS WINDOW CLEANING</h1>
            </div>
        </div>
    );
}

export default Hero;