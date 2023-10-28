import React from 'react';
import styled from 'styled-components';

import CarouselButtons from '../Home/Button';

const ContentContainer = styled.div`
    margin: auto;
    width: 75%;
    text-align: center;

    @media only screen 
    and (max-width: 420px) 
    and (max-height: 920px)
    and (orientation: portrait){
        width: 80%;
    }

    @media only screen 
    and (min-width: 667px)
    and (max-width: 920px)
    and (max-height: 414px) 
    and (orientation: landscape){
        width: 85%;
    }
`;

const Header = styled.h1`
    margin-top: 6vw;
    margin-bottom: 3vw;

    @media only screen 
    and (max-width: 420px) 
    and (max-height: 920px)
    and (orientation: portrait){
        margin-top: 16vw;
        margin-bottom: 4vw;
        font-weight: bold;
    }

    @media only screen 
    and (min-width: 667px)
    and (max-width: 920px)
    and (max-height: 414px) 
    and (orientation: landscape) {
        margin-top: 16vw;
        font-weight: bold;
    }
`;

const SubHeader = styled.h4`
    @media only screen 
        and (max-width: 420px) 
        and (max-height: 920px)
        and (orientation: portrait){
            margin-top: 6vw;
        }

    @media only screen 
        and (min-width: 667px)
        and (max-width: 920px)
        and (max-height: 414px) 
        and (orientation: landscape) {
            margin-top: 3vw;
        }
`;

const InnerContainer = styled.div`
    text-align: justify;
    margin-top: 4vw;
`;

const TextContainer = styled.div`

@media only screen 
    and (max-width: 420px) 
    and (max-height: 920px)
    and (orientation: portrait){
     margin-top: 4vw;   
    }
`;

const Content = styled.p`
    margin-top: 1.5vw;
    margin-bottom: 2vw;

    @media only screen 
    and (max-width: 420px) 
    and (max-height: 920px)
    and (orientation: portrait){
        margin-top: 3vw;
        margin-bottom: 2vw;
    }

    @media only screen 
    and (min-width: 667px)
    and (max-width: 920px)
    and (max-height: 414px) 
    and (orientation: landscape) {
        margin-top: 3vw;
        margin-bottom: 2vw;
    }
`;

const content = (props) => {

    return (
        <ContentContainer>
            <Header>{props.title}</Header>
            <InnerContainer>
                <SubHeader>{props.subtitle1}</SubHeader>
                    <TextContainer>
                        <Content>{props.p1}</Content>
                        <Content>{props.p2}</Content>
                        <Content>{props.p3}</Content>
                    </TextContainer>
                <SubHeader>{props.subtitle2}</SubHeader>
                    <TextContainer>
                        <Content>{props.p4}</Content>
                        <Content>{props.p5}</Content>
                    </TextContainer>
                <SubHeader>{props.subtitle3}</SubHeader>
                    <Content>{props.p6}</Content>
                <SubHeader>{props.subtitle4}</SubHeader>
                    <Content>{props.p7}</Content>
            </InnerContainer>
            <CarouselButtons isContent={true} />
        </ContentContainer>
    );
}

export default content;