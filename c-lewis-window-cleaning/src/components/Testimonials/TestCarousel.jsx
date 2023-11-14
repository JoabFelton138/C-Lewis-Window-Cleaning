import React, { useState, useEffect } from 'react';
import styled from 'styled-components'

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Carousel from 'react-bootstrap/Carousel';
import '../../CSS/ReviewCarousel.css';

const CarouselWrapper = styled.div`
    padding-top: 3vw;
    padding-bottom: 3vw;
    background-color: #D3D3D3;
    width: 100%;
    display: flex;
    justify-content: center;
`
const CarouselContainer = styled.div`
    width: 80%;
`

export default function TestCarousel() {
    return (
        <CarouselWrapper>
            <CarouselContainer>
                <Carousel>
                    <Carousel.Item>
                        <Container>
                            <Row xs={1} md={2} lg={3} className="justify-content-md-center">
                                <Col>
                                    <Card className="text-center" style={{ width: '18rem' }}>
                                        <Card.Body>
                                        <Card.Title>Card 1</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Body>
                                        <Card.Title>Card 2</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Container>
                            <Row xs={1} md={2} lg={3} className="justify-content-md-center">
                                <Col>
                                    <Card className="text-center" style={{ width: '18rem' }}>
                                        <Card.Body>
                                        <Card.Title>Card 3</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Body>
                                        <Card.Title>Card 4</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </Carousel.Item>
                </Carousel>
            </CarouselContainer>
        </CarouselWrapper>
    );
}
