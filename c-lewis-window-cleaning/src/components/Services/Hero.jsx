import React from 'react';

import '../../CSS/Services/Hero.css';

import wc from '../../images/wc/wchero.jpg';
import cc from '../../images/carousel/cc2-min.jpg';
import gc from '../../images/carousel/gc-min.jpg';
import pw from '../../images/carousel/pw2-min.jpg';

const heroImages = [
    {
        title: "cc",
        src: cc
    },
    {
        title: "gc",
        src: gc
    },
    {
        title: "pw",
        src: pw
    },
    {
        title: "wc",
        src: wc
    }
];

const Hero = (props) =>{

    let x = heroImages[props.source];

    return(
            <div className='hero-container'
             style={{
                 backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), 
                                 rgba(0, 0, 0, 0.5)), 
                                 url(${x.src})`,
                                 height: '95vh'
             }}>
                <div className="hero-text">
                    <h1>{props.heroTitle}</h1>
                </div>
        </div>
    );
}

export default Hero;