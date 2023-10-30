import styled from 'styled-components';

import React, {useEffect, useState} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowUp } from '@fortawesome/free-solid-svg-icons';


const ScrollIcon = styled(FontAwesomeIcon)`
    position: fixed; 
    width: 100%;
    left: 45vw;
    bottom: 50px;
    height: 3vw;
    z-index: 1;
    cursor: pointer;
    color: rgb(0, 191, 255);
`;

const ScrollButton = () => {

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300){
                setVisible(true);
            }
            else {
                setVisible(false);
            }
        });
    }, []);

    const scrollUp = () => {
        window.scrollTo({
            top: 0, 
            behavior: 'smooth'
        });
    }

    return (
        <>
            {visible &&
                <ScrollIcon 
                    className="scroll-button"
                    type="button"
                    onClick={scrollUp}
                    icon={faCircleArrowUp}/>
                }
        </>
    );
}

export default ScrollButton;