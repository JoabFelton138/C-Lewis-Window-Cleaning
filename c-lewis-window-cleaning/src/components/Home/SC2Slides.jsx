import React, { useState } from 'react';

import {Row, Col, Image, Button} from 'react-bootstrap';
import styled from 'styled-components';

import '../../CSS/ServiceCarousel2.css';


const SlideContent = styled.div`

    margin-top: 8vw;
    text-align: center;

    .portfolio-button{
        margin-bottom: 2vw;
    }

    p{
        margin-top: 1.5vw;
        margin-bottom: 1.5vw;
    }

    @media only screen
    and (max-width: 767px) {
        .portfolio-button{
            margin-bottom: 5vw;
        }
    
        p{
            margin-top: 3vw;
            margin-bottom: 3vw;
        }
    }

`;

function SC2Slide (props) {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  React.useEffect(() => {
    function handleResize() {
        setScreenWidth(
        window.innerWidth)
    }
    window.addEventListener('resize', handleResize);    
})

    return (
        <div>
            <Row>
                <Col md={6}>
                    <Image src={props.imgSrc} 
                            alt="Image" 
                            fluid />
                            {/* <p>dipinder kaur</p> */}
                </Col>

                <Col md={6}>
                    <SlideContent>
                        
                        <h3>{props.title}</h3>
                        <p>{props.content}</p>
                        <Button className="portfolio-button"
                            variant="outline-secondary"
                            size="sm"
                            onClick={''}>
                            GET A QUOTE!
                        </Button>
                    </SlideContent>
                </Col>
            </Row>
        </div>
    );
}

export default SC2Slide;