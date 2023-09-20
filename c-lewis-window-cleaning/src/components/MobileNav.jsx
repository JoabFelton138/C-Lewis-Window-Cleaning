import React, { useState } from 'react';

import '../CSS/MobileNav.css';

import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';


const MobileNav = () => {

    const [overlay, setOverlay] = React.useState(false);
    const [dropDown, setDropDown] = React.useState(false);
    const [count, setCount] = React.useState(0);

    const openNav = () => {
        setOverlay(true);
        document.getElementById("myNav").style.width = "100%";
    }

    function closeNav() {
        setDropDown(false);
        document.getElementById("myNav").style.width = "0%";
    }

    const handleClick = () => {

        if (count === 1){
            setDropDown(false)
            setCount(0);
        }

        else {
            setCount(1)
            setDropDown(true);
        }
    }

    return (
        <>
            <Navbar expand="lg"
                className="mobile-nav"
                sticky="top">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt="brand"
                            src={'blacknologo.png'}
                            width="115vw"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle
                        aria-controls="responsive-navbar-nav"
                        onClick={openNav}
                    />
                </Container>
            </Navbar>

            <div id="myNav" className="overlay">
                
                <a
                    href={void (0)}
                    className="closebtn"
                    type="button"
                    onClick={closeNav}>
                    &times;
                </a>

                <div class="overlay-content">
                    
                    <a href="#about">QUOTE</a>
                    <a href="#services">CONTACT</a>

                    <a className="dropdown-btn"
                       onClick={handleClick}
                       type="button"
                       >
                        SERVICES
                        { dropDown 
                            ?
                            <FontAwesomeIcon style={{fontSize: '15px',
                                                     paddingLeft: '2vw',
                                                     paddingBottom: '1vw'}} 
                                             icon={faCaretUp} />
                            :
                            <FontAwesomeIcon style={{fontSize: '15px',
                                                    paddingLeft: '2vw',
                                                    paddingBottom: '1vw'}}
                                             icon={faCaretDown}/>
                        }
                    </a>

                    {dropDown &&
                        <div className="dropdown-container">
                            <a href="#">WINDOW CLEANING</a>
                            <a href="#">GUTTERS & FASCIAS</a>
                            <a href="#">PRESSURE WASHING</a>
                            <a href="#">CONSERVATORY CLEANING</a>
                        </div>
                    }
                    <a href="#">PORTFOLIO</a>
                    <a href="#">TESTIMONIALS</a>
                </div>
            </div>
        </>
    );
}

export default MobileNav;