import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className="pt-5">
            <footer className="text-center text-lg-start" style={{ backgroundColor: '#f6f6f6' }}>
                <div className="container d-flex justify-content-center pt-5">
                    <p>07391 853 506</p>
                </div>
                <div className="container d-flex justify-content-center">
                    <p>c.lewis.wcs@hotmail.com</p>
                </div>
                <div className="container d-flex justify-content-center pb-3">
                    <FontAwesomeIcon
                        className='mx-2'
                        icon={faFacebookSquare}
                        style={{ color: 'rgb(0, 191, 255)' }}
                        type="button"
                        onClick={() => window.open("https://facebook.com", "_blank")}
                    />
                    <FontAwesomeIcon
                        className='mx-2'
                        icon={faLinkedinIn}
                        style={{ color: 'rgb(0, 191, 255)' }}
                        type="button"
                        onClick={() => window.open("https://linkedin.com", "_blank")}
                    />
                    <FontAwesomeIcon
                        className='mx-2'
                        icon={faInstagram}
                        style={{ color: 'rgb(0, 191, 255)' }}
                        type="button"
                        onClick={() => window.open("https://instagram.com", "_blank")}
                    />
                </div >
                <div className="text-center text-white p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    © 2023 Copyright: cwlewiswcs.com
                </div >
            </footer >
        </div >
    );
}

export default Footer;