import React from 'react';

import '../../CSS/Quote.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';

import pw from '../../images/carousel/pw6.jpg';
import wc from '../../images/gallery/wc5.jpg'

const Quote = () => {
    return (
        <div>
            <div
                className="w-100 bg-image d-flex justify-content-center align-items-center"
                >
                <div className="image-content">
                    <FontAwesomeIcon icon={faQuoteLeft}/>
                    <h1>Great service, quality is amazing.
                        Always here when he says he will be,
                        extremely competitive with his prices!
                    </h1>
                    <Button variant="outline-light">TESTIMONIALS</Button>{' '}
                </div>
            </div>
        </div>
    );
}

export default Quote;