import axios from 'axios';
import React, { useState, useEffect } from 'react';

import '../../CSS/ReviewCarouselStyle.css';

import ReviewCard from './ReviewCard';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Container, Row, Col } from 'react-bootstrap';

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

  const responsive = {
  
    desktop: {
      breakpoint: { max: 3000, min: 992 },
      items: 3,
      slidesToSlide: 3
    },
    tablet: {
      breakpoint: { max: 992, min: 575 },
      items: 2,
      slidesToSlide: 2

    },
    mobile: {
       breakpoint: { max: 575 },
       items: 1,
       slidesToSlide: 1
     }
  };

  return (
    <div className='card-container'>

      <Container>
        <Row >
            <Carousel responsive={responsive}>
                  {review.map((item, i) => {
                                return (
                                  <Col>
                                      <ReviewCard
                                          profile_photo_url={item.profile_photo_url}
                                          author_name={item.author_name}
                                          relative_time_description={item.relative_time_description}
                                          rating={item.rating}
                                          text={item.text}
                                      />
                                  </Col>
                                );
                  })} 
            </Carousel>
          </Row>
      </Container>

    </div>
  );
}

export default ReviewCarousel;