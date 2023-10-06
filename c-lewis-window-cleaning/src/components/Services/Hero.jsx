import React from 'react';
import '../../CSS/Services/Hero.css';
import cc from '../../images/carousel/cc.jpg'

const Hero = (props) =>{

    return(
        <div className='hero-container'
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), 
                                rgba(0, 0, 0, 0.4)), 
                                url(${cc})`,
            }}>
            <div className="hero-text">
                <h1>WEST MIDLANDS WINDOW CLEANING</h1>
            </div>
        </div>
    );
}

export default Hero;