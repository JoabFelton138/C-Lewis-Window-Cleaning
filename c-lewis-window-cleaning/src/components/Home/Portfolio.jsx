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
        <div className="portfolio-header">
            <h3>MY PORTFOLIO</h3>
            <h6>I take great pride in my work, see for yourself!</h6>
        </div>    
        <div className="inner-container row pt-5 d-flex justify-content-center">
            <div className="images col-lg-4 col-md-12 mb-3">
                <figure>
                    <img
                        src={cc}
                        className="w-100 shadow-1-strong mb-3"
                        alt="Boat on Calm Water"
                    />
                </figure>
                <figure>
                    <img
                        src={gutter}
                        className="w-100 shadow-1-strong  mb-3"
                        alt="Wintry Mountain Landscape"
                    />
                </figure>
            </div>

            <div className="images col-lg-4 mb-4 mb-lg-0">
                <figure>
                    <img
                        src={pw}
                        className="w-100 shadow-1-strong  mb-3"
                        alt="Mountains in the Clouds"
                    />
                </figure>
                <figure>
                    <img
                        src={bwc}
                        className="w-100 shadow-1-strong  mb-3"
                        alt="Boat on Calm Water"
                    />
                </figure>
            </div>
        </div>
        <Button className="portfolio-button" variant="outline-secondary" >VIEW PORTFOLIO</Button>{' '}
    </div>);
}

export default Portfolio;