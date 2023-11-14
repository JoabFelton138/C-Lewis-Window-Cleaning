import React from 'react';
import Hero from '../components/Services/Hero';
import ReviewCarousel from '../components/Testimonials/ReviewCarousel';
import TestCarousel from '../components/Testimonials/TestCarousel';
import styled from 'styled-components'

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

export default function TestimonialsPage (){

    return(
        <div className="mt-8">
            <Hero source={4} heroTitle={"A SPOTLESS REPUTATION"}/>
            <Container>
                <Header>REVIEWS</Header>
                <Content>I work very hard for my customers and it shows in my reviews, take a look!</Content>
                {/* <TestCarousel/> */}
                <ReviewCarousel/>
            </Container>
        </div>
    );
}