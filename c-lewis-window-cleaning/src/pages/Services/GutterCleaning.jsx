import React from 'react';

import '../../CSS/Services/WindowCleaning.css';

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

                p1={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Nisi quis eleifend quam adipiscing vitae. Integer malesuada nunc vel risus commodo viverra maecenas accumsan lacus. Mi ipsum faucibus vitae aliquet nec.`}

                subtitle2={`Why Get Your Gutters Cleaned?`}

                p4={`itae justo eget magna fermentum iaculis eu non. Cursus sit amet dictum sit. Eget aliquet nibh praesent tristique magna sit amet. Tincidunt tortor aliquam nulla facilisi cras fermentum. Nec ultrices dui sapien eget mi proin sed. Nibh sed pulvinar proin gravida hendrerit lectus. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Nisl nisi scelerisque eu ultrices vitae auctor eu augue.`}
            />
            <ImageGrid title={'gc'}/>
            <Scroll/>
        </div>
    );
}

export default GutterCleaning;