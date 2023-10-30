import React from 'react';
import styled from 'styled-components'

const FooterContainer = styled.section`
    background-color: rgb(246, 246, 246);
    text-align: center;
`;

const FirstSection = styled.section`
    padding-bottom: 2vw; 
    padding-top: 2vw; 
    line-height: 1vw;
    font-size: 14px;

    @media only screen 
    and (max-width: 420px) 
    and (max-height: 920px)
    and (orientation: portrait){
        padding-bottom: 5vw; 
        padding-top: 5vw; 
    }

    @media only screen 
    and (min-width: 667px)
    and (max-width: 920px)
    and (max-height: 414px) 
    and (orientation: landscape) {
        padding-bottom: 3vw; 
        padding-top: 3vw; 
    }

    @media only screen 
    and (min-width: 650px) 
    and (max-width: 660px) 
    and (max-height: 280px)
    {
        padding-bottom: 5vw; 
        padding-top: 5vw; 
    }

    @media only screen 
    and (min-width: 768px)
    and (max-width: 820px)
    and (max-height: 1180px)
    and (orientation: portrait)
    {
        padding-bottom: 5vw; 
        padding-top: 5vw; 
    }

`;

const SecondSection = styled.section`
    background-color: rgb(211,211,211);
    color: white;
    padding: 1vw;
`;

const Footer = () => {
    return (
            <FooterContainer>
                <FirstSection>
                    <p>07391 853 506</p>
                    <p>c.lewis.wcs@hotmail.com</p>                  
                    <a href="https://www.facebook.com/WCS.CLewis">
                        https://www.facebook.com/WCS.CLewis
                    </a>                  
                </FirstSection>
                <SecondSection>
                    © 2023 Copyright: cwlewiswcs.com
                </SecondSection >
            </FooterContainer >
    );
}

export default Footer;