import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import van from '../images/carousel/van.png';
import wc from '../images/carousel/wc1.jpg'
import gc from '../images/carousel/gc4.jpg';

function ImageCarousel() {
    return (
        <div class="intro">
            <img src={gc} class="d-block w-100" alt="First slide" />
        </div>
    );
}

export default ImageCarousel;