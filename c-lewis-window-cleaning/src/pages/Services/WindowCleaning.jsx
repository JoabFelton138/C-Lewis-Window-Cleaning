import React from 'react';

import Hero from '../../components/Services/Hero';
import Content from '../../components/Services/Content';
import Scroll from '../../components/commons/Scroll';

import '../../CSS/Services/WindowCleaning.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import wc10 from '../../images/wc/wc10.jpg';

const WindowCleaning = () => {
    return (
        <div>
            <Hero source={"cc"} />
            <Content
                title={'Window Cleaning Services'}

                subtitle1={`Why Should I Get My Windows Cleaned?`}

                p1={`Did you know that neglected window tracks are often filled with dust and insects? Also, were you aware that a build up of debris can cause glass to become chemically etched?`}
                p2={`Not only can these issues prevent the mechanisms on your windows from working properly, but they can also aggrevate any allergies that may effect you or your family.`}
                p3={`By hiring an expert, you can gurantee your windows will be cleaned thoroughly, thus prolonging their life and keeping your home healthy and allergen free in the process.`}

                subtitle2={`Why Can't I Just Do It Myself?`}

                p4={`Obviously you can but without the right equipment, the risk of falling becomes a major hazard. It's much safer to leave it to a fully-insured professional. Not only do I have ladder stand offs and extension poles but I've also had extensive training.`}

                p5={`I also use a specialty solution designed to keep your windows streak-free and provide a thorough inspection of the condition of your windows, examining for issues such as pane compression.`}

                subtitle3={`What If It Rains?`}

                p6={`If one thing's for certain, rain is never off the cards with English weather! Not to worry, I offer a three day guarantee, so if it rains within 3 days afterwards, give me a ring and I'll glady touch up any spotting that may have occurred as a result of the weather!`}

                subtitle4={`Sounds Good!`}

                p7={`Then don't settle for anything less! If you're in the Wheaton Aston, Perton or Shifnal area and find yourself in need of a commercial / residential window cleaning service, go ahead and get your free quote today!`}
            />
            <div>
                <Container className='wc-quote-container'>
                    <Row className="wc-quote-row justify-content-md-center">
                        <Col xs={12} sm={6} md={4}>
                            <FontAwesomeIcon icon={faQuoteLeft} />
                            <p className="wc-quote-p">
                                Chad provides a first class window cleaning service.
                                He's always prompt and keeps in touch before arriving.
                                He takes his time to do a first class job of not only
                                the windows, but the frames, seals and surrounds too.
                            </p>
                            <h5 className="wc-quotee">- Phillip Parker</h5>
                        </Col>
                        <Col xs={12} sm={6} md={4}>
                            <FontAwesomeIcon icon={faQuoteLeft} />
                            <p className="wc-quote-p">
                                Chad offers a great service at a competitive price.
                                Good communication and great job done on the windows each time!
                            </p>
                            <h5 className="wc-quotee">- Glenn Rickwood</h5>
                        </Col>
                        <Col xs={12} sm={6} md={4} >
                            <FontAwesomeIcon icon={faQuoteLeft} />
                            <p className="wc-quote-p">
                                Chad does a very professional job. He is a perfectionist who leaves
                                our windows sparkling clean. He is also pleasant and polite. Highly recommended!
                            </p>
                            <h5 className="wc-quotee">- Nicola Challinor</h5>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='image-grid-container'>
                <Container>
                    <Row className="d-flex justify-content-center">

                        <Col lg={4} md={12} mb={3}>

                            <Image
                                src={wc10}
                                className="image mb-3"
                                alt="Boat on Calm Water"
                            />
                            <Image
                                src={wc10}
                                className="image mb-3"
                                alt="Boat on Calm Water"
                            />
                        </Col>

                        <Col lg={4} md={12} mb={3}>

                            <Image
                                src={wc10}
                                className="w-100 shadow-1-strong  mb-3"
                                alt="Mountains in the Clouds"
                            />

                            <Image
                                src={wc10}
                                className="w-100 shadow-1-strong  mb-3"
                                alt="Boat on Calm Water"
                            />

                        </Col>

                        <Col lg={4} md={12} mb={3}>

                            <Image
                                src={wc10}
                                className="w-100 shadow-1-strong  mb-3"
                                alt="Mountains in the Clouds"
                            />

                            <Image
                                src={wc10}
                                className="w-100 shadow-1-strong  mb-3"
                                alt="Boat on Calm Water"
                            />

                        </Col>

                    </Row>
                </Container>
            </div>
            <Scroll/>
        </div>
    );
}

export default WindowCleaning;