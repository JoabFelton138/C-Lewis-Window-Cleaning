import React from 'react';

import '../../CSS/Services/WindowCleaning.css';

import Hero from '../../components/Services/Hero';
import Content from '../../components/Services/Content';
import ImageGrid from '../../components/Services/ImageGrid';
import Scroll from '../../components/commons/Scroll';

const GutterCleaning = () => {
    return (<div>
        <Hero source={1} heroTitle={"GUTTER CLEANING SERVICES"}/>
        <Content
            title={'Gutter Cleaning Services'}

            subtitle1={`Why Should I Get My Windows Cleaned?`}

            p1={`Did you know that neglected window tracks are often filled with dust and insects? Also, were you aware that a build up of debris can cause glass to become chemically etched?`}
            p2={`Not only can these issues prevent the mechanisms on your windows from working properly, but they can also aggrevate any allergies that may effect you or your family.`}
            p3={`By hiring an expert, you can gurantee your windows will be cleaned thoroughly, thus prolonging their life and keeping your home healthy and allergen free in the process.`}

            subtitle2={`Why Can't I Just Do It Myself?`}

            p4={`Obviously you can but without the right equipment, the risk of falling becomes a major hazard. It's much safer to leave it to a fully-insured professional. Not only do I have ladder stand offs and extension poles but I've also had extensive training.`}

            p5={`I also use a specialty solution designed to keep your windows streak-free and provide a thorough inspection of the condition of your windows, examining for issues such as pane compression.`}
        />
        <ImageGrid title={'gc'}/>
        <Scroll/>
    </div>);
}

export default GutterCleaning;