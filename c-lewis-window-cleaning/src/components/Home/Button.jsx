import React from 'react';

import {useNavigate} from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const CarouselButtons = (props) => {
    console.log("in buttons compo, props = ", props.scrollTo)
    const toForm = props.scrollTo;

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
            navigate('/conservatory-cleaning');
        }
    };

    const navigateToForm = () => {
        toForm.current?.scrollIntoView({behavior: 'smooth'});
    };

    return (
        <Container className="button-div">
            <Row>
                <Col className="d-flex justify-content-center gap-2">
                    <Button variant="outline-light" onClick={navigateToPage}> 
                        READ MORE
                    </Button>
                    <Button variant="outline-light" onClick={navigateToForm}>
                        GET A QUOTE
                    </Button> 
                </Col>
            </Row>
        </Container>    
    );
}

export default CarouselButtons;