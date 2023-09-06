import React from 'react';

import '../../CSS/Portfolio.css'
import gutter from '../../images/gallery/gutter1.jpeg'
import pw from '../../images/gallery/pw12.jpg'
import cc from '../../images/gallery/cc.jpeg'
import pw2 from '../../images/gallery/pw6.jpg'
import wc from '../../images/gallery/wc5.jpg'
import bwc from '../../images/gallery/bwc.jpg'

import Button from 'react-bootstrap/Button';

const Portfolio = () => {
    return (<div className="portfolio-container">
        <h3>MY PORTFOLIO</h3>
        <p>I take great pride in my work, take a look for yourself!</p>
        
        <div class="inner-container row pt-5 d-flex justify-content-center" style={{width:'100%'}}>
            <div class="images col-lg-4 col-md-12 mb-3">
                <figure>
                    <img
                        src={cc}
                        class="w-100 shadow-1-strong mb-3"
                        alt="Boat on Calm Water"
                    />
                </figure>
                <figure>
                    <img
                        src={gutter}
                        class="w-100 shadow-1-strong  mb-3"
                        alt="Wintry Mountain Landscape"
                    />
                </figure>
            </div>

            <div class="images col-lg-4 mb-4 mb-lg-0">
                <figure>
                    <img
                        src={pw}
                        class="w-100 shadow-1-strong  mb-3"
                        alt="Mountains in the Clouds"
                    />
                </figure>
                <figure>
                    <img
                        src={bwc}
                        class="w-100 shadow-1-strong  mb-3"
                        alt="Boat on Calm Water"
                    />
                </figure>
            </div>
        </div>
        <Button variant="outline-secondary" >SEE MORE</Button>{' '}
    </div>);
}

export default Portfolio;