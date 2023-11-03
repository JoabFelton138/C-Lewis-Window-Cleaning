import React from 'react';

import Hero from '../../components/Services/Hero';
import Content from '../../components/Services/Content';
import ImageGrid from '../../components/Services/ImageGrid';
import Scroll from '../../components/commons/Scroll';

const PressureWashing = () => {
    return (
        <div>
            <Hero source={2} heroTitle={"PRESSURE WASHING SERVICES"}/>
            <Content 
                title={"Pressure Washing Services"}

                subtitle1={`What's Included in the Service?`}
                p1={`I have great experience in cleaning many different types of surfaces including drive ways. I use top of the range pressure washing equipment, allowing me to adjust the pressure depending
                on the surface. In some cases, I also use an industrial strength surface cleaning agent called sodium hypochlorite. This allows me to get rid of any stubborn grime with ease, particularly
                bad cases of black spot, usually found on most stone surfaces. I also offer a re-sanding and re-sealing service. `}
                disclaimer={`Pressure washing services are available to Wheaton Aston, Perton and Shifnal as well as the surrounding areas.*`}
                subtitle2={`Sounds Good!`}
                p4={`Then don't settle for anything less! If you're in need of a professional pressure washing service
                go ahead and get your free quote today!`}
            />
            <ImageGrid title={'pw'}/>
            <Scroll />
        </div>
    );
}

export default PressureWashing;