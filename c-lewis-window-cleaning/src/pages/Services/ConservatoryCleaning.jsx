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
            p1={`Consectetur adipiscing elit duis tristique sollicitudin nibh. Commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Quis commodo odio aenean sed adipiscing diam donec. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat est. em fringilla ut morbi tincidunt augue interdum velit. Pellentesque elit eget gravida cum sociis natoque. `}
        />
        <ImageGrid title={'cc'}/>
        <Scroll />
    </div>)
}

export default ConservatoryCleaning;