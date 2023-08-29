import React from 'react';

import '../CSS/Quote.css';

import pw from '../images/carousel/pw6.jpg';

const Quote = () => {
    return (
        <div className="quote-container">
            <img src={pw} alt="pw"/>
            <h3>Great service, quality is amazing.
                Always here when he says he will be
                and extermely competitive with his prices
            </h3>
        </div>
    );
}

export default Quote;