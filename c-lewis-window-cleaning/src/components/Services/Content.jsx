import React from 'react';
import styled from 'styled-components';

import CarouselButtons from '../Home/Button';

const ContentContainer = styled.div`
    margin: auto;
    width: 60%;
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
    margin-bottom: 2vw;

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

const SubHeader2 = styled.h4`
    margin-top: 2vw;
    margin-bottom: 2vw;

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

const Disclaimer = styled.p`

    color: red;
    font-size: 15px;
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
                        <Disclaimer>{props.disclaimer}</Disclaimer>
                    </TextContainer>

                <SubHeader2>{props.subtitle2}</SubHeader2>
                    <TextContainer>
                        <Content>{props.p4}</Content>
                        <Content>{props.p5}</Content>
                        <Content>{props.p6}</Content>
                        <Content>{props.p7}</Content>
                    </TextContainer>

                <SubHeader2>{props.subtitle3}</SubHeader2>
                    <TextContainer>
                        <Content>{props.p8}</Content>
                    </TextContainer>

            </InnerContainer>
            <CarouselButtons isContent={true} />
        </ContentContainer>
    );
}

export default content;