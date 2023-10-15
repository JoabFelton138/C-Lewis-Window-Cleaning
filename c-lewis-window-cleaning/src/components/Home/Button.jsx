import React from 'react';

import {Routes, Route, useNavigate} from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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
        <Container className="button-div">
            <Row>
                <Col className="d-flex justify-content-center gap-2">
                    <Button variant="outline-light" onClick={navigateToPage}> 
                        READ MORE
                    </Button>
                    <Button variant="outline-light">
                        GET A QUOTE
                    </Button> 
                </Col>
            </Row>
        </Container>    
    );
}

export default CarouselButtons;