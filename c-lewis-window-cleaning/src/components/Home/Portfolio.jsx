import React from 'react';

import '../../CSS/Portfolio.css'
import gutter from '../../images/gallery/gutter1.jpeg'
import pw from '../../images/gallery/pw12.jpg'
import cc from '../../images/gallery/cc.jpeg'
import pw2 from '../../images/gallery/pw6.jpg'
import wc from '../../images/gallery/wc5.jpg'


import Button from 'react-bootstrap/Button';

const Portfolio = () => {
    return (<div className="portfolio-container">
        <h3>MY PORTFOLIO</h3>
        <p>I take great pride in my work, take a look for yourself!</p>
        <div class="row pt-5 d-flex justify-content-center">
            <div class="col-lg-4 col-md-12 mb-4">
                <img
                    src={cc}
                    class="w-100 shadow-1-strong  mb-4"
                    alt="Boat on Calm Water"
                />

                <img
                    src={gutter}
                    class="w-100 shadow-1-strong  mb-4"
                    alt="Wintry Mountain Landscape"
                />
            </div>

            <div class="col-lg-4 mb-4 mb-lg-0">
                <img
                    src={pw}
                    class="w-100 shadow-1-strong  mb-4"
                    alt="Mountains in the Clouds"
                />

                <img
                    src={cc}
                    class="w-100 shadow-1-strong  mb-4"
                    alt="Boat on Calm Water"
                />
            </div>
        </div>
        <Button variant="outline-secondary" >SEE MORE</Button>{' '}
    </div>);
}

export default Portfolio;