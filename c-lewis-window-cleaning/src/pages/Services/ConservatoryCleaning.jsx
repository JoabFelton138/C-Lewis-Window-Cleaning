import React from 'react';

import Hero from '../../components/Services/Hero';
import Content from '../../components/Services/Content';
import ImageGrid from '../../components/Services/ImageGrid';
import Scroll from '../../components/commons/Scroll';

const ConservatoryCleaning = () => {
    return (
    <div>
        <Hero source={2} heroTitle={"CONSERVATORY CLEANING"}/>
        <Content 
            title={"Conservatory Cleaning Services"}
            subtitle1={`Why Should I Get My Windows Cleaned?`}
            p1={`Did you know that neglected window tracks are often filled with dust and insects? Also, were you aware that a build up of debris can cause glass to become chemically etched?`}
            p2={`Not only can these issues prevent the mechanisms on your windows from working properly, but they can also aggrevate any allergies that may effect you or your family.`}
            p3={`By hiring an expert, you can gurantee your windows will be cleaned thoroughly, thus prolonging their life and keeping your home healthy and allergen free in the process.`}
        />
        <ImageGrid title={'cc'}/>
        <Scroll />
    </div>)
}

export default ConservatoryCleaning;