import React from 'react';
import Alert from 'react-bootstrap/Alert';

function RenderAlert(){
    return (
        <Alert variant="danger" className="">
            <div className=''>
                <Alert.Heading>
                    There seems to be a problem ...
                </Alert.Heading>
                    please review your submission and try again!
            </div>
        </Alert>
    );
}

export default RenderAlert;