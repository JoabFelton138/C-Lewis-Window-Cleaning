import React from 'react';
import styled from 'styled-components';

import wc from '../../images/wc/wchero.jpg';
import cc from '../../images/carousel/cc2-min.jpg';
import gc from '../../images/carousel/gc-min.jpg';
import pw from '../../images/carousel/pw2-min.jpg';
import van from '../../images/carousel/van.png';
import van2 from '../../images/carousel/van6.jpeg';

const heroImages = [
    {
        title: "cc",
        src: cc
    },
    {
        title: "gc",
        src: gc
    },
    {
        title: "pw",
        src: pw
    },
    {
        title: "wc",
        src: wc
    },
    {
        title: "van",
        src: van
    },
    {
        title: "van2",
        src: van2
    }
];

const HeroContainerstyled = styled.div`
    background-position: center center;
    background-repeat: none;
    background-size: cover;
    color: white;
    height: 95vh;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.5)), 
    url(${props => props.src});
`;

const HeroContent = styled.div`
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 95%;

    @media only screen 
    and (min-width: 667px)
    and (max-width: 920px)
    and (max-height: 414px) 
    and (orientation: landscape) {
            top: 55%;
    }
    @media only screen 
    and (min-width: 650px) 
    and (max-width: 660px) 
    and (max-height: 280px)
    {
            top: 52%;
    }

    @media only screen 
    and (min-width: 768px)
    and (max-width: 820px)
    and (max-height: 1180px)
    and (orientation: portrait)
    {
            top: 50%;
    }
`;

const Header = styled.h1`
    line-height: 1em;
    font-size: 4.5em;
    font-weight: bold;

    @media only screen 
    and (max-width: 420px) 
    and (max-height: 920px)
    and (orientation: portrait){
        font-size: 45px;
    }

    @media only screen 
    and (min-width: 667px)
    and (max-width: 920px)
    and (max-height: 414px) 
    and (orientation: landscape) {
        font-size: 48px;
    }

    @media only screen 
    and (min-width: 650px) 
    and (max-width: 660px) 
    and (max-height: 280px)
    {
        font-size: 40px;
        line-height: 45px;
        padding-top: 1vw;
    }

    @media only screen 
    and (min-width: 768px)
    and (max-width: 820px)
    and (max-height: 1180px)
    and (orientation: portrait)
    {
             font-size: 90px;
            line-height: 90px;
    }

`;

const SubHeader = styled.h2`
    font-weight: bold;
    margin-top: 2vw;
`;

const Hero = (props) =>{

    let x = heroImages[props.source];

    return(
            <HeroContainerstyled src={x.src}>
                <HeroContent>
                    <Header>{props.heroTitle}</Header>
                    <SubHeader>{props.heroSubTitle}</SubHeader>
                </HeroContent>
            </HeroContainerstyled>
    );
}

export default Hero;