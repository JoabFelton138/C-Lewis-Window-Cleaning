import React from 'react';
import Alert from 'react-bootstrap/Alert';

function RenderAlert(){
    return (
        <Alert variant="danger" className="p-4">
            <div className='mt-2 mb-2'>
                <Alert.Heading>
                    Something went wrong!
                </Alert.Heading>
                There seems to be a problem with your submission, 
                please review the fields below and try again.
            </div>
        </Alert>
    );
}

export default RenderAlert;