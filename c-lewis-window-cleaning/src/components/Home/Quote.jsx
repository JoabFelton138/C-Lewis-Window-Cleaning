import React from 'react';

import {useNavigate} from 'react-router-dom';

import '../../CSS/Quote.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

import Button from 'react-bootstrap/Button';

const Quote = () => {

    const navigate = useNavigate();

    const navigateToTestimonials = () => {
        navigate("/testimonials");
    }

    return (
        <div className="bg-image d-block w-100">
            <div className="content-container">
                <FontAwesomeIcon icon={faQuoteLeft}/>
                <h1 className="text-white">
                    Great service, quality is amazing.
                    Always here when he says he will be,
                    extremely competitive with his prices!
                </h1>
                <Button variant="outline-light" onClick={navigateToTestimonials}>
                    TESTIMONIALS
                </Button>
                
            </div>
        </div>
    );
}

export default Quote;