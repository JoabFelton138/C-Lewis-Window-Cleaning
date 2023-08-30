import React from 'react';
import Chad from '../images/etc/chad2.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';


const AboutMe = () => {

    const handleClick = () => {
        window.location.replace('https://facebook.com');
    };

    return (
        <div className='about'>
            <img src={Chad} alt="chad" class="img-fluid mx-auto d-block" />
            <h3>Meet Chad</h3>
            <p>Yeah, motherfuckers better know.
                Huh, huh (I'm a bad, bad, bad).
                Lock your windows, close your doors.
                Biggie Smalls.
                Huh, yeah.
                (I'm a bad, bad, bad).

                My man Inf left a TEC and a nine at my crib,
                Turned him self in, he had to do a bid.
                A one-to-three, he be home the end of '93.
                I'm ready to get this paper, G, you with me?</p>

            <div className="icons">
                <FontAwesomeIcon
                    icon={faFacebookSquare}
                    type="button"
                    onClick={() => window.open("https://facebook.com", "_blank")}
                />
                <FontAwesomeIcon
                    icon={faLinkedinIn} 
                    type="button"
                    onClick={() => window.open("https://linkedin.com", "_blank")}
                />
                  <FontAwesomeIcon
                    icon={faInstagram}
                    color="pink"
                    type="button"
                    onClick={() => window.open("https://instagram.com", "_blank")}
                />
            </div>
        </div>
    );
}

export default AboutMe;