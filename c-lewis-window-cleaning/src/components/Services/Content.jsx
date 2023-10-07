import React from 'react';
import '../../CSS/Services/Content.css'

import Button from 'react-bootstrap/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const content = (props) => {

    const icon = <FontAwesomeIcon icon={faEnvelope} />

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

        <Button className='free-quote' size="lg"> {icon} Get A Free Quote</Button>

    </div>
    );
}

export default content;