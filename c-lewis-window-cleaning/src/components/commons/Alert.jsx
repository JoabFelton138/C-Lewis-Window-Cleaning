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
                <p className="p mb-0">
                    Please review your submission and try again!
                </p>
            </StyledAlert>
        </AlertContainer>
    );
}

export default RenderAlert;