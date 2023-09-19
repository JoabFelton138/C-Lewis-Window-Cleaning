import React, { useState } from 'react';

import '../CSS/MobileNav.css';

import {Link} from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const MobileNav = () => {

    const [overlay,setOverlay] = React.useState(false);
    
    const openNav = () => {
        setOverlay(true);
        document.getElementById("myNav").style.width = "100%";
    }

    function closeNav() {
        document.getElementById("myNav").style.width = "0%";
        document.getElementById("myNav").style.fontColor = "black";
    }

    return (
        <>
            {/* <div className="mobile-nav">
                <div className="mobile-nav-container">
                    <img
                        alt="brand"
                        src={'blacknologo.png'}
                        width="120vw"
                    />
                    <FontAwesomeIcon icon={faBars} onClick={openNav} />
                </div>
            </div>

            </div> */}
            <Navbar expand="lg" 
                    className="mobile-nav"
                    sticky="top">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt="brand"
                            src={'blacknologo.png'}
                            width="120vw"
                        />                    
                    </Navbar.Brand>
                    <Navbar.Toggle 
                        aria-controls="responsive-navbar-nav"
                        onClick={openNav} 
                    />
                </Container>
            </Navbar>
            <div id="myNav" class="overlay">           
                <a
                    className="closebtn" 
                    onClick={closeNav}>
                        &times;
                </a>

                <div class="overlay-content">
                    <Nav.Link>GET A QUOTE</Nav.Link>
                    <Nav.Link>CONTACT</Nav.Link>
                    <NavDropdown title="SERVICES" className="dropDown">
                    </NavDropdown>
                    <Nav.Link>PORTFOLIO</Nav.Link>
                    <Nav.Link>TESTIMONIALS</Nav.Link>
                </div>
            </div>
        </>
    );
}

export default MobileNav;