import React from 'react';

import '../../CSS/Portfolio.css'
import gutter from '../../images/gallery/gutter1.jpeg'
import pw from '../../images/gallery/pw12.jpg'
import cc from '../../images/gallery/cc.jpeg'
import pw2 from '../../images/gallery/pw6.jpg'
import wc from '../../images/gallery/wc5.jpg'
import bwc from '../../images/gallery/bwc.jpg'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Image from 'react-bootstrap/Image';

const Portfolio = () => {
    return (<div className="portfolio-container">
        <div className="portfolio-header">
            <h3>MY PORTFOLIO</h3>
            <h6>I take great pride in my work, see for yourself!</h6>
        </div>    
        <Container>
            <Row className="pt-5 d-flex justify-content-center">
                <Col lg={4} md={12} mb={3}>
                    <figure>
                        <Image
                            src={cc}
                            className="w-100 shadow-1-strong mb-3"
                            alt="Boat on Calm Water"
                        />
                    </figure>
                    <figure>
                        <Image
                            src={gutter}
                            className="w-100 shadow-1-strong  mb-3"
                            alt="Wintry Mountain Landscape"
                        />
                    </figure>
                </Col>
                <Col lg={4} md={12} mb={3}>
                    <figure>
                        <Image
                            src={pw}
                            className="w-100 shadow-1-strong  mb-3"
                            alt="Mountains in the Clouds"
                        />
                    </figure>
                    <figure>
                        <Image
                            src={bwc}
                            className="w-100 shadow-1-strong  mb-3"
                            alt="Boat on Calm Water"
                        />
                    </figure>
                </Col>
            </Row>
        </Container>

        <Button className="portfolio-button" variant="outline-secondary" >VIEW PORTFOLIO</Button>{' '}
    </div>);
}

export default Portfolio;