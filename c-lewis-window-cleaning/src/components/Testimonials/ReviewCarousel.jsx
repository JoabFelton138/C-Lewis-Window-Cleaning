import axios from 'axios';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ReviewCard from './ReviewCard';

import '../../CSS/ReviewCarousel.css';

const CarouselWrapper = styled.div`
    padding-top: 3vw;
    padding-bottom: 3vw;
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

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

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
        <Carousel responsive={responsive} 
                  containerClass="carousel-container"
                  itemClass="carousel-item-padding-40-px"
                  centerMode={true}
                  >
            {review.map((item, i) => {
                  return (
                      <ReviewCard key={i}
                          profile_photo_url={item.profile_photo_url}
                          author_name={item.author_name}
                          relative_time_description={item.relative_time_description}
                          rating={item.rating}
                          text={item.text}
                      />
                  );
              })}  
        </Carousel>
  );
}

export default ReviewCarousel;