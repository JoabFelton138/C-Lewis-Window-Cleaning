import React from 'react';

import Hero from '../../components/Services/Hero';
import Content from '../../components/Services/Content';
import ImageGrid from '../../components/Services/ImageGrid';
import Scroll from '../../components/commons/Scroll';

const PressureWashing = (props) => {
    return (
        <div>
            <Hero source={2} heroTitle={"PRESSURE WASHING SERVICES"}/>
            <Content 
                title={"Pressure Washing Services"}

                subtitle1={`What's Included in the Service?`}
                p1={`Massa eget egestas purus viverra accumsan in nisl. Tellus mauris a diam maecenas sed enim. Elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi. Dolor sit amet consectetur adipiscing elit ut aliquam. Senectus et netus et malesuada. Fusce id velit ut tortor pretium viverra suspendisse potenti. Aliquam faucibus purus in massa tempor. `}
            />

            <ImageGrid title={'pw'}/>
            <Scroll />
        </div>
    );
}

export default PressureWashing;