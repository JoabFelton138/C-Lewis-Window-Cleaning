import React from 'react';

import Hero from '../../components/Services/Hero';
import Content from '../../components/Services/Content';
import ImageGrid from '../../components/Services/ImageGrid';
import Scroll from '../../components/commons/Scroll';

const ConservatoryCleaning = () => {
    return (
    <div>
        <Hero source={0} heroTitle={"CONSERVATORY & SOLAR PANEL CLEANING"}/>
        <Content 
            title={"Conservatory & Solar Panel Services"}
            subtitle1={`What's Included in the Service?`}
            p1={`Cleaning conservatory roofs and solar panels often requires a delicate touch. I use soft brushes combined with a soapy cleaning agent to ensure I’m giving a gentle but effective thorough
            clean. Having a clean conservatory roof free off any moss or growth can reduce costly repairs to the exterior and interior of your conservatory, including damp and structural damage.
            Keeping solar panels clean and free from any debris ensures that they can run sufficiently and most effectively.`}
            disclaimer={`Conservatory & Solar Panel Cleaning is available to Wheaton Aston, Perton and Shifnal as well as the surrounding areas.*`}
            subtitle2={`Sounds Good!`}
            p4={`Then don't settle for anything less! If you're in need of a quality conservatory and solar panel cleaning service
            go ahead and get your free quote today!`}
        />
        <ImageGrid title={'cc'}/>
        <Scroll />
    </div>)
}

export default ConservatoryCleaning;