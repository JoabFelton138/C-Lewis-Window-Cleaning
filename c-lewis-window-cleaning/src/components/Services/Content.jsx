import React from 'react';
import '../../CSS/Services/Content.css'

import {useNavigate} from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import CarouselButtons from '../Home/Button';

const content = (props) => {

    return (
        <div className="services-content-container">

            <h1>{props.title}</h1>

            <div className='services-content-div'>

            <h4>{props.subtitle1}</h4>

            <div className='services-p'>
                <p>{props.p1}</p>
                <p>{props.p2}</p>
                <p>{props.p3}</p>
            </div>

            <h4>{props.subtitle2}</h4>
            
            <div className='services-p'>
                <p>{props.p4}</p>
                <p>{props.p5}</p>
            </div>

            <h4>{props.subtitle3}</h4>

            <div className='services-p'>
                <p>{props.p6}</p>
            </div>

            <h4>{props.subtitle4}</h4>
        
            <div className='services-p'>
                <p>{props.p7}</p>
            </div>

        </div>

       <CarouselButtons isContent={true}/>

    </div>
    );
}

export default content;