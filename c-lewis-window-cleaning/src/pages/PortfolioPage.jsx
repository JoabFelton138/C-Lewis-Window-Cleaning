import React, {useState, useEffect}  from 'react';
import Hero from '../components/Services/Hero';

import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import gutter from '../../src/images/gallery/gutter1.jpeg'
import pw from '../../src/images/gallery/pw12.jpg'
import cc from '../../src/images/gallery/cc.jpeg'
import bwc from '../../src/images/gallery/bwc.jpg'

export default function PortfolioPage () {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    React.useEffect(() => {
        function handleResize() {
            setScreenWidth(
            window.innerWidth)
        }
        window.addEventListener('resize', handleResize);
    })

    return(
        <div className="mt-8">
            {screenWidth < 500 
                ? 
                    <Hero source={6} heroTitle={"COMING SOON"}/>
                :
                    <Hero source={5} heroTitle={"COMING SOON"}/>
            }
            <div>
            </div>
        </div>
    );
}
