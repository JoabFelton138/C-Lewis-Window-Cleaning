import React, { useState } from 'react';

import {Link} from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

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
            <Navbar className="mobile-nav"
                    expand="lg" 
                    data-bs-theme="light" 
                    fixed="top">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt="brand"
                            width="95px"
                            src={'blacknologo.png'}
                            className="d-inline-block align-top"
                        />{' '}
                    </Navbar.Brand>
                    <FontAwesomeIcon 
                        icon={faBars}
                        type='button'
                        onClick={openNav} />
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