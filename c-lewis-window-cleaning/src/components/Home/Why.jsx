import React from 'react';
import Stack from 'react-bootstrap/Stack';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { faDroplet } from '@fortawesome/free-solid-svg-icons';

import '../../CSS/Why.css';

const Why = () => {

    return (<div className="why-me">
        <h3>WHY CHOOSE C.LEWIS WINDOW CLEANERS?</h3>
        <div className="why-me-container">
            <div>
                <FontAwesomeIcon icon={faThumbsUp}/>
                <h4>FULLY INSURED</h4>
                <p>
                    Motherfucking right, my pockets looking kinda tight
                    And I'm stressed
                    Yo, Biggie let me get the vest
                    No need for that, just grab the fucking gat
                </p>
            </div>
            <div>
                <FontAwesomeIcon icon={faUserFriends}/>
                <h4>FAMILY ORIENTED</h4>
                <p>
                    Motherfucking right, my pockets looking kinda tight
                    And I'm stressed
                    Yo, Biggie let me get the vest
                    No need for that, just grab the fucking gat
                </p>
            </div>
            <div>
                <FontAwesomeIcon icon={faDroplet}/>
                <h4>RAIN GUARANTEE</h4>
                <p>
                    Motherfucking right, my pockets looking kinda tight
                    And I'm stressed
                    Yo, Biggie let me get the vest
                    No need for that, 
                    just grab the fucking gat
                </p>
            </div>
        </div>
    </div>
    );
}

export default Why;