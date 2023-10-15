import React from 'react';

import {Routes, Route, useNavigate} from 'react-router-dom';

import Button from 'react-bootstrap/Button';

const CarouselButtons = (props) => {
    
    const navigate = useNavigate();

    const navigateToPage = () => {
        if (props.page === 'wc'){
            navigate('/window-cleaning');
        }
        else if (props.page === 'pw'){
            navigate('/pressure-washing');
        }
        else if (props.page === 'gc'){
            navigate('/gutter-cleaning');
        }
        else {
            alert('kebabs');
        }
    };

    return (
        <div className='button-div'>
            <Button variant="outline-light" onClick={navigateToPage}> 
                READ MORE
            </Button>
            <Button variant="outline-light">
                GET A QUOTE
            </Button>
        </div>
    );
}

export default CarouselButtons;