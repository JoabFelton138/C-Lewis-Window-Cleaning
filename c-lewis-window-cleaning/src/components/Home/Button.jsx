import React from 'react';
import styled from 'styled-components';
import {navigateToForm} from '../utils/functions.js';

import {useNavigate} from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const QuoteButton = styled(Button)`
    background-color: rgb(0, 191, 255) !important;
    margin-bottom: 5vw;
    margin-top: 3vw;

    @media only screen 
    and (max-width: 420px) 
    and (max-height: 920px)
    and (orientation: portrait){
        background-color: rgb(0, 191, 255) !important;
        margin-top: 3vw;
        margin-bottom: 10vw;
    }

    @media only screen 
    and (min-width: 667px)
    and (max-width: 920px)
    and (max-height: 414px) 
    and (orientation: landscape) {
        margin-top: 6vw;
        margin-bottom: 8vw;
    }
`;

const MailIcon = styled(FontAwesomeIcon)`
    font-size: 1rem;
    color: white;
    padding-right: 1vw;

    @media only screen 
    and (max-width: 420px) 
    and (max-height: 920px)
    and (orientation: portrait){
        font-size: 1rem;
        padding-right: 3vw;
    }

    @media only screen 
    and (min-width: 667px)
    and (max-width: 920px)
    and (max-height: 414px) 
    and (orientation: landscape) {
        font-size: 1rem;
        padding-right: 1vw;
    }
`;

const CarouselButtons = (props) => {
    
    const content = props.isContent;

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

    return (
        <Container className="button-div">
            <Row>
                { content ?
                    <Col className="d-flex justify-content-center">
                        <QuoteButton onClick={() => navigateToForm(navigate)}>
                            <MailIcon icon={faEnvelope}/>            
                            GET A QUOTE
                        </QuoteButton> 
                    </Col>
                :
                    <Col className="d-flex justify-content-center gap-2">
                        <Button variant="outline-light" onClick={navigateToPage}> 
                            READ MORE
                        </Button>
                        <Button variant="outline-light" onClick={() => navigateToForm(navigate)}>
                            GET A QUOTE
                        </Button> 
                    </Col>
                }
            </Row>
        </Container>    
    );
}

export default CarouselButtons;