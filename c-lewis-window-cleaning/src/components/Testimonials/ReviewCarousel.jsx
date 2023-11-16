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
      items: 3
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

        <div className='parent'>
          <Carousel   responsive={responsive}
                      autoPlay={true}
                      swipeable={true}
                      draggable={false}
                      showDots={false}
                      infinite={true}
                      partialVisible={false}
                    >

              {review.map((item, i) => {
                    return (
                        <div className='slider' key={i}>
                          <ReviewCard
                              profile_photo_url={item.profile_photo_url}
                              author_name={item.author_name}
                              relative_time_description={item.relative_time_description}
                              rating={item.rating}
                              text={item.text}
                          />
                        </div>
                    );
                })}  

          </Carousel>
        </div>

  );
}

export default ReviewCarousel;