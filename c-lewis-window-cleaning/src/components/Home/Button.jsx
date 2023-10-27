import React from 'react';
import styled from 'styled-components';

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
`;

const StyledIcon = styled(FontAwesomeIcon)`
    font-size: 1rem;
    color: white;
    padding-right: 1vw;
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

    const navigateToForm = () => {
        navigate("/home");
        setTimeout(() => {
            const formSection = document.getElementById("target");
            if (formSection) {
              formSection.scrollIntoView({ behavior: "smooth" });
            }
          }, 100);
    }

    return (
        <Container className="button-div">
            <Row>
                { content ?
                    <Col className="d-flex justify-content-center">
                        <QuoteButton 
                                onClick={navigateToForm}
                            >
                            <StyledIcon icon={faEnvelope}/>
                            
                            GET A QUOTE
                        </QuoteButton> 
                    </Col>
                :
                    <Col className="d-flex justify-content-center gap-2">
                        <Button variant="outline-light" onClick={navigateToPage}> 
                            READ MORE
                        </Button>
                        <Button variant="outline-light" onClick={navigateToForm}>
                            GET A QUOTE
                        </Button> 
                    </Col>
                }
            </Row>
        </Container>    
    );
}

export default CarouselButtons;