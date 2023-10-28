import React from 'react';
import styled from 'styled-components';
import Alert from 'react-bootstrap/Alert';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';

const AlertContainer = styled.div`
    padding-top: 2.5vw;
`;

const StyledAlert = styled(Alert)`
    background-color: #fff6f6;
    border-color: #C41E3A;
    color: #880808;
    border-width: 1.5px;    
`;

const WarningIcon = styled(FontAwesomeIcon)`
    height: 1.6em; 
    padding-top: 1.2vw;
`;

const AlertHeader = styled(Alert.Heading)`
    margin-left: 1vw;
    padding-top: 1vw;

    @media only screen and (max-width: 500px) {
        font-size: 3.5vw;
        margin-left: 2vw;
        padding-top: 2vw;
    } 
`;

const AlertContent = styled.p`
    @media only screen and (max-width: 500px) {
        font-size: 3vw;
    } 
`;

function RenderAlert(){
    return (
        <AlertContainer>
            <StyledAlert>
                <div className="d-flex">
                    <WarningIcon icon={faCircleExclamation}/>
                    <AlertHeader>
                        Something's not right...
                    </AlertHeader>
                </div>
                <hr />
                <AlertContent className="mb-0">
                    Please review your submission and try again!
                </AlertContent>
            </StyledAlert>
        </AlertContainer>
    );
}

export default RenderAlert;