import React from 'react';
import Hero from '../components/Services/Hero';
import ReviewCarousel from '../components/Testimonials/ReviewCarousel';
import styled from 'styled-components'
import Image from 'react-bootstrap/Image';

import fb from '../images/FB.png';
import google from '../images/GOOGLE.png';
import nd from '../images/NEXTDOOR.png';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Container = styled.div`
    text-align: center;
    margin-top: 10vw;
    margin-bottom: 10vw;

`
const Header = styled.h3`
    font-weight: bold;
`

const Content = styled.p`
    padding-top: 2vw;
`

const ReviewImage = styled(Image)`
    width: 60px;
    padding-top: 1vw;
    cursor: pointer;
    transition: opacity 0.25s;

    &:hover{
        opacity: 0.7;
    }
`

export default function TestimonialsPage (){

    
    return(
        <div className="mt-8">

            <Hero source={4} heroTitle={"A SPOTLESS REPUTATION"}/>

            <Container>
                <Header>REVIEWS</Header>

                <Content>I work very hard for my customers and it shows in my reviews, take a look!</Content>
                
                <ReviewImage src={fb} alt="fb" onClick={() => window.open("https://www.facebook.com/WCS.CLewis", "_blank")}/>
                <ReviewImage src={google} alt="google" onClick={() => window.open("https://www.google.com/maps/place/C.Lewis+Window+Cleaning+Services/@52.6477151,-2.4485995,11z/data=!4m8!3m7!1s0xadb1940461bbdf07:0x8d63bb8f6fac1264!8m2!3d52.6478294!4d-2.2837939!9m1!1b1!16s%2Fg%2F11tfgwspw1?entry=ttu", "_blank")}/>
                <ReviewImage src={nd} alt="nd" onClick={() => window.open("https://nextdoor.co.uk/pages/clewis-window-cleaning-services/", "_blank")}/>

                <ReviewCarousel/>
                
            </Container>
            
        </div>
    );
}