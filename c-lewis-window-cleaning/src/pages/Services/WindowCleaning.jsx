import React from 'react';
import styled from 'styled-components';

import '../../CSS/WC.css';

import Hero from '../../components/Services/Hero';
import Content from '../../components/Services/Content';
import ImageGrid from '../../components/Services/ImageGrid';
import Scroll from '../../components/commons/Scroll';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const WindowCleaning = () => {

    const QuoteContainer = styled(Container)`
        margin-bottom: 3vw;
    `; 

    const QuoteContent = styled.p`
        margin-top: 3vw;
        font-size: 1.2em;

        @media only screen 
        and (max-width: 420px) 
        and (max-height: 920px)
        and (orientation: portrait){
                margin-top: 5vw;
        }

        @media only screen 
        and (min-width: 768px)
        and (max-width: 820px)
        and (max-height: 1180px)
        and (orientation: portrait)
        {
                margin-top: 2vw;
        }
    `;

    const Quotee = styled.h5`
        margin-top: 2vw;
        margin-bottom: 4vw;

        @media only screen 
        and (max-width: 420px) 
        and (max-height: 920px)
        and (orientation: portrait){
                margin-top: 5vw;
                margin-bottom: 8vw;
        }

        @media only screen 
        and (min-width: 768px)
        and (max-width: 820px)
        and (max-height: 1180px)
        and (orientation: portrait)
        {
            margin-top: 2vw;
            margin-bottom: 4vw;
        }

        @media (min-width: 580px) and (max-width: 990px){
            margin-top: 2vw;
            margin-bottom: 4vw;
        }
    `;

    const QuoteIcon = styled(FontAwesomeIcon)`
        font-size: 32px;
    `;

    return (
        <div>
            <Hero source={3} heroTitle={"WINDOW CLEANING SERVICES"}/>

            <Content
                title={"Window Cleaning Services"}
                subtitle1={`What's Included In The Service`}

                p1={`Before proceeding to clean, I give the overall condition of your windows a thorough examination. During which, I'll check the seals and their surrounding areas, keeping a close eye out for such potential issues as pane compression. 
                     Afterwards, I like to use a chemically-free purified water solution that'll give your windows a shiny, professional finish.`}
                
                p2={`To begin, I'll loosen any dirt or build up on the windows, frames and surrounding plastics by giving them a thorough scrub.
                I'll then rinse the windows rigorously, leaving behind only the pure water solution which dry clears in a matter of minutes. 
                The results are always completely crystal clear!`}

                p3={`Not only is this an environmentally friendly approach, but the process also significantly reduces the risk of damage to your property. 
                Furthermore, in the unlikely chance you discover any marks or spotting, providing this is up-to 24 hours after receiving a service, I'll come back for a touch up, absolutely free of charge!`}

                disclaimer={`Please note, Window Cleaning Services are limited to just the Wheaton Aston, Perton and Shifnal areas.*`}
  
                subtitle2={`Why Get Your Windows Cleaned`}

                p4={`Did you know that neglected window tracks are often filled with dust and insects? Also, were you aware that a build up of debris can cause glass to become chemically etched?`}
                p5={`Not only can these issues prevent the mechanisms on your windows from working properly, but they can also aggrevate any allergies that may effect you or your family. By hiring an expert, you can guarantee your windows 
                    will be cleaned thoroughly, thus prolonging their life and keeping your home healthy and allergen free in the process.`}
                p7={`Last of all, whilst there's always the option of doing it yourself, without the right equipment, the risk of falling becomes a major hazard. It's much safer to leave it to a fully-insured 
                    professional. Not only do I have ladder stand offs and extension poles but I've also had extensive training so you don't have to take the risk!`}

                subtitle3={`Sounds Good!`}
                p8={`Then don't settle for anything less! If you're in the Wheaton Aston, Perton or Shifnal area and find yourself in need of a commercial / residential window cleaning service, 
                    go ahead and get your free quote today!`}
            />
            
            <QuoteContainer>
                <Row className="justify-content-md-center">
                    <Col xs={12} sm={6} md={7} lg={4}>
                        <QuoteIcon icon={faQuoteLeft} />
                        <QuoteContent>
                            Chad provides a first class window cleaning service.
                            He's always prompt and keeps in touch before arriving.
                            He takes his time to do a first class job of not only
                            the windows, but the frames, seals and surrounds too.
                        </QuoteContent>
                        <Quotee>- Phillip Parker</Quotee>
                    </Col>
                    <Col xs={12} sm={6} md={7} lg={4}>
                        <QuoteIcon icon={faQuoteLeft} />
                        <QuoteContent>
                            Chad offers a great service at a competitive price.
                            Good communication and great job done on the windows each time!
                        </QuoteContent>
                        <Quotee>- Glenn Rickwood</Quotee>
                    </Col>
                    <Col xs={12} sm={6} md={7} lg={4}>
                        <QuoteIcon icon={faQuoteLeft} />
                        <QuoteContent>
                            Chad does a very professional job. He is a perfectionist who leaves
                            our windows sparkling clean. He is also pleasant and polite. Highly recommended!
                        </QuoteContent>
                        <Quotee>- Nicola Challinor</Quotee>
                    </Col>
                </Row>
            </QuoteContainer>

            <ImageGrid title={'wc'}/>

            <Scroll/>
        </div>
    );
}

export default WindowCleaning;