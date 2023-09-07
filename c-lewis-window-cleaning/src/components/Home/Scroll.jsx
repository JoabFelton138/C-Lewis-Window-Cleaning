import '../../CSS/Home/Scroll.css';

import React, {useEffect, useState} from 'react';

import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowUp } from '@fortawesome/free-solid-svg-icons';

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
                <FontAwesomeIcon 
                    className="scroll-button"
                    type="button"
                    onClick={scrollUp}
                    icon={faCircleArrowUp}/>
                }
        </>
    );
}

export default ScrollButton;