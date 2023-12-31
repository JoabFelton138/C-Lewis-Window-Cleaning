import React, { useState, useEffect} from 'react';

import {navigateToForm} from '../utils/functions.js';
import {useNavigate} from 'react-router-dom';

import {Link} from 'react-router-dom';

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
    const navigate = useNavigate();

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
                            to="/home">
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
                                    onClick={() => navigateToForm(navigate)}                                    as={Link} 
                                    to="/home#get-a-quote">
                                    GET A QUOTE
                                </Nav.Link>

                                <Nav.Link
                                    href="tel:447391853506">
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
                                        CONSERVATORIES & SOLAR PANELS
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
                    
                    <a href="#get-a-quote"
                        onClick={() => navigateToForm(navigate)}  >
                        QUOTE
                    </a>

                    <a href="tel:447391853506"> 
                        CONTACT
                    </a>

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
                            <Link
                                as={Link}
                                to="/window-cleaning">
                                WINDOW CLEANING
                            </Link>
                            <Link
                                as={Link}
                                to="/gutter-cleaning">
                                GUTTERS & FASCIAS
                            </Link>
                            <Link
                                as={Link}
                                to="/pressure-washing">
                                PRESSURE WASHING                            
                            </Link>
                            <Link
                                as={Link}
                                to="/conservatory-cleaning">
                                CONSERVATORY CLEANING                           
                            </Link>
                        </div>
                    }
                    <Link
                        as={Link}
                        to="/portfolio">
                        PORTFOLIO
                    </Link>
                    <Link
                        as={Link}
                        to="/testimonials">
                        TESTIMONIALS
                    </Link>
                </div>
        </div>
    </>
    )
}

export default NavBar;