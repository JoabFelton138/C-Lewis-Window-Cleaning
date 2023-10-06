import React from 'react';
import Hero from '../../components/Services/Hero';
import Content from '../../components/Services/Content';

const WindowCleaning = () => {
    return (
        <div>
            <Hero source={"cc"}/>
            <Content 
                title={'Window Cleaning Services'}

                subtitle1={`Why Should I Get My Windows Cleaned?`}

                p1={`Did you know that neglected window tracks are often filled with dust and insects? Also, were you aware that a build up of debris can cause glass to become chemically etched?`}
                p2={`Not only can these issues prevent the mechanisms on your windows from working properly, but they can often aggrevate allergies that may effect you and your family.`}
                p3={`By hiring a fully-insured, trained professional, you can gurantee your windows will be cleaned thoroughly, prolonging their life and keeping your home healthy and allergen free in the process.`}
                
                subtitle2={`Why Can't I Just Do It Myself?`}

                p4={`Falls can be a major hazard, therefore its much safer to leave it to a fully-insured professional. I have ladder stand offs, extension poles and have had extensive training so you don’t have to take the risk!`}
                
                p5={`Aside from equipment, I also use a specialty solution designed to keep your windows looking brand-new and streak-free. I also provide a thorough inspection of the condition of your windows and examine for issues such as pane compression.`}

                subtitle3={`What If It Rains?`}
                
                p6={`If one thing's for certain, rain is never off the cards with English weather! Not to worry, I offer a three day guarantee, so if it rains within 3 days afterwards, give me a ring and I'll glady touch up any spotting that may have occurred as a result of the weather!`}
                
                subtitle4={`Sounds Good!`}

                p7={`Then don't settle for anything less! If you're in the Wheaton Aston, Perton or Shifnal area and find yourself in need of either commercial or residential window cleaning services, go ahead and get your free quote today!`}
            />
        </div>
    );
}

export default WindowCleaning;