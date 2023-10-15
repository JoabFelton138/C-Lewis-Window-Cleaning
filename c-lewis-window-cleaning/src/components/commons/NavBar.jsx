import React, { useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {

    const [navbar, setNavbar] = useState(false);
    const [dropDown, setDropDown] = React.useState(false);
    const [count, setCount] = React.useState(0);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [screenHeight, setScreenHeight] = useState(window.innerHeight);

    React.useEffect(() => {
        function handleResize() {
            setScreenWidth(
            window.innerWidth)
            setScreenHeight(window.innerHeight)
        }
        window.addEventListener('resize', handleResize);
    })

    const openNav = () => {
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

    const changeBackground = () => {
        if (window.scrollY >= 5) {
            setNavbar(true);
        }
        else {
            setNavbar(false);
        }
    };

    window.addEventListener('scroll', changeBackground);

    return (
    <>
        <Navbar className={navbar ? 'navbar active' : 'navbar'}
                collapseOnSelect 
                expand="lg" 
                fixed="top">
                    <Navbar.Brand as={Link}
                            to="/">
                        <Image
                            alt="brand"
                            width="96em"
                            src={navbar ? 'blacklogo.png' : 'whitelogo.png'}
                            className="d-inline-block align-top"
                        />{' '}
                    </Navbar.Brand>

                    <Navbar.Toggle
                        className="bg-light"
                        aria-controls="responsive-navbar-nav"
                        onClick={openNav}
                    />

                    <Navbar.Collapse id="navbar-nav">

                        {screenWidth > 991 &&
                        
                        <Nav className="ms-auto">
                                
                                <Nav.Link
                                    className="a"
                                    href="/#form">
                                    GET A QUOTE
                                </Nav.Link>

                                <Nav.Link
                                    as={Link}
                                    to="">
                                    CONTACT
                                </Nav.Link>

                                <NavDropdown title="SERVICES" id="navbarScrollingDropdown">
                                    <NavDropdown.Item as={Link} to="/window-cleaning">
                                        WINDOW CLEANING
                                    </NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/gutter-cleaning">
                                        GUTTER & FASCIAS
                                    </NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/pressure-washing">
                                        PRESSURE WASHING
                                    </NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="conservatory-cleaning">
                                        CONSERVATORY CLEANING
                                    </NavDropdown.Item>
                                </NavDropdown>

                                <Nav.Link
                                    as={Link}
                                    to="/portfolio">
                                    PORTFOLIO
                                </Nav.Link>

                                <Nav.Link
                                    as={Link}
                                    to="/testimonials">
                                    TESTIMONIALS
                                </Nav.Link>

                            </Nav>
                        }
                    </Navbar.Collapse>
        </Navbar>

        <div id="myNav" 
             className="overlay">
                
                <a
                    href={void (0)}
                    className="closebtn"
                    type="button"
                    onClick={closeNav}>
                    &times;
                </a>

                <div className="overlay-content">
                    
                    <a href="#about">QUOTE</a>
                    <a href="#services">CONTACT</a>

                    <a className="dropdown-btn"
                       onClick={handleClick}
                       type="button"
                       >
                        SERVICES
                        {/* { dropDown 
                            ?
                            <FontAwesomeIcon style={{fontSize: '15px',
                                                     paddingLeft: '1.5vw',
                                                     paddingBottom: '1vw'}} 
                                             icon={faCaretUp} />
                            :
                            <FontAwesomeIcon style={{fontSize: '15px',
                                                    paddingLeft: '1.5vw',
                                                    paddingBottom: '1vw'}}
                                             icon={faCaretDown}/>
                        } */}
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
    )
}

export default NavBar;