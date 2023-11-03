import React, {useState, useEffect}  from 'react';
import Hero from '../components/Services/Hero';

export default function PortfolioPage () {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    React.useEffect(() => {
        function handleResize() {
            setScreenWidth(
            window.innerWidth)
        }
        window.addEventListener('resize', handleResize);
    })

    return(
        <div className="mt-8">
            {screenWidth < 500 
                ? 
                    <Hero source={6} heroTitle={"COMING SOON"}/>
                :
                    <Hero source={5} heroTitle={"COMING SOON"}/>
            }
        </div>
    );
}
