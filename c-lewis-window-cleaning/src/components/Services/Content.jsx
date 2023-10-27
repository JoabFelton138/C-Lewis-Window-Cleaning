import React from 'react';
import styled from 'styled-components';

import '../../CSS/Services/Content.css'

import CarouselButtons from '../Home/Button';

const ContentContainer = styled.div`
    margin: auto;
    width: 75%;
    text-align: center;
`;

const Header = styled.h1`
    margin-top: 6vw;
    margin-bottom: 3vw;`
    ;

const InnerContainer = styled.div`
    text-align: justify;
    margin-top: 4vw;
`;

const Content = styled.p`
    margin-top: 1.5vw;
    margin-bottom: 2vw;
`;


const content = (props) => {

    return (
        <ContentContainer>
            <Header>{props.title}</Header>
            <InnerContainer>
                <h4>{props.subtitle1}</h4>
                    <Content>{props.p1}</Content>
                    <Content>{props.p2}</Content>
                    <Content>{props.p3}</Content>
                <h4>{props.subtitle2}</h4>
                    <Content>{props.p4}</Content>
                    <Content>{props.p5}</Content>
                <h4>{props.subtitle3}</h4>
                    <Content>{props.p6}</Content>
                <h4>{props.subtitle4}</h4>
                    <Content>{props.p7}</Content>
            </InnerContainer>
            <CarouselButtons isContent={true} />
        </ContentContainer>
    );
}

export default content;