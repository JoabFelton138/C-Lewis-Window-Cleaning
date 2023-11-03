import React from 'react';

import Hero from '../../components/Services/Hero';
import Content from '../../components/Services/Content';
import ImageGrid from '../../components/Services/ImageGrid';
import Scroll from '../../components/commons/Scroll';

const GutterCleaning = () => {
    return (
        <div>
            <Hero source={1} heroTitle={"GUTTER CLEANING SERVICES"}/>
            <Content
                title={'Gutter Cleaning Services'}

                subtitle1={`What's Included In the Service?`}

                p1={`My method for clearing out gutters to ensure that they are flowing correctly, is to use a pole reach system which includes a vacuum.  This allows me to reach up to four stories. Also i can do it by hand off a
                ladder when needed. Pictures to ensure they have been correctly cleared can be provided upon request.`}

                disclaimer={`Gutter cleaning services are available to Wheaton Aston, Perton and Shifnal as well as the surrounding areas.*`}

                subtitle2={`Why Get Your Gutters Cleaned?`}

                p4={`Keeping your gutters cleared is extremely important and is often over looked. Keeping a eye on what’s in the gutters can prevent water damage to the exterior and interior of your home,
                including your roof!`}

                subtitle3={`Sounds Good!`}
                p8={`Then don't settle for anything less! If your gutters are overdue a clean,
                go ahead and get your free quote today!`}
            />
            <ImageGrid title={'gc'}/>
            <Scroll/>
        </div>
    );
}

export default GutterCleaning;