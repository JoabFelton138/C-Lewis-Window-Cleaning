import axios from 'axios';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import ReviewCard from './ReviewCard';

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

function ReviewCarousel() {

  const baseURL = 'maps/api/place/details/json?';
  const [review, setReview] = useState([]);

  useEffect(() => {
      axios.get(`${baseURL}`, {
        headers : {
            "Content-Type" : "application/json"
        },
        params: {
          key: process.env.REACT_APP_API_KEY,
          place_id: 'ChIJ0_xvqWUD5kcRzKYnQQZJeZo'
        }
      })
      .then((result) => {
        setReview(result.data.result.reviews);
      });
    }, []);

  return (
    <CarouselWrapper>
      <CarouselContainer>
        <Carousel>
            {review.map((item, i) => {
                  return (
                      <Carousel.Item interval={3000}>
                        <Container>
                          <Row xs={1} md={2} lg={3} className="justify-content-md-center">
                              <Col>
                                    <ReviewCard
                                        profile_photo_url={item.profile_photo_url}
                                        author_name={item.author_name}
                                        relative_time_description={item.relative_time_description}
                                        rating={item.rating}
                                        text={item.text}
                                    />
                              </Col>
                          </Row>
                        </Container>
                      </Carousel.Item>

                );
              })}  
        </Carousel>
      </CarouselContainer>
    </CarouselWrapper>
  );
}

export default ReviewCarousel;