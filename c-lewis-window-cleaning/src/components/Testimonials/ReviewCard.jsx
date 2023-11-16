import React from 'react';
import styled from 'styled-components';

import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Stars = styled(FontAwesomeIcon)`
    color: #ffa534;
`;

const CardContainer = styled.div`
  margin-top: 2vw;
  margin-bottom: 2vw;
  text-align: center; 
  width: 20rem;
  height: 18rem;
  background-color: white;
`;

const ImageContainer = styled.div`
  text-align:center;
`

const UserImage = styled(Image)`
  margin-top: 1vw;
  width: 85px;
`

function MultiplyStars(icon, rating){

  let StarsArr = [];
  for (let i = 0; i < rating; i++)
  {
    StarsArr.push(icon)
  }
  return StarsArr;
}

export default function ReviewCard(props){

    const StarIcon = <Stars icon={faStar}/>;

    return (
          <CardContainer className='shadow p-3 d-block rounded'>
            <ImageContainer>
              <UserImage  
                      src={props?.profile_photo_url} 
                      referrerPolicy="no-referrer" 
                      roundedCircle
              />
            </ImageContainer>
            <Card.Body>
                <Card.Title>
                  {props?.author_name}
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {props?.relative_time_description}
                </Card.Subtitle>
                <Card.Subtitle className="mt-2 mb-2">
                  {MultiplyStars(StarIcon, props.rating)}
                </Card.Subtitle>
                <Card.Text className="mb-2">
                  {props?.text}
                </Card.Text>
            </Card.Body>
          </CardContainer>
    );
}