import React from 'react';
import styled from 'styled-components';

import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import wc1 from '../../images/wc/wc11.jpg';
import wc2 from '../../images/wc/wc2fin.jpg';
import wc3 from '../../images/wc/window angle.jpg';
import wc4 from '../../images/wc/wc5fin.jpg';
import wc5 from '../../images/wc/wcfin.jpg';
import wc6 from '../../images/wc/wc4fin.jpg';

import gc1 from '../../images/gc/gc1.jpeg';
import gc2 from '../../images/gc/gc2.jpeg';
import gc3 from '../../images/gc/gc3.jpeg';
import gc4 from '../../images/gc/gc4.jpg';
import gc5 from '../../images/gc/gc5.jpg';
import gc6 from '../../images/gc/gc6.jpeg';

import pw1 from '../../images/pw/pw1.jpg';
import pw2 from '../../images/pw/pw2.jpg';
import pw3 from '../../images/pw/pw3.jpg';
import pw4 from '../../images/pw/pw4.jpg';
import pw5 from '../../images/pw/pw5.jpg';
import pw6 from '../../images/pw/pw6.jpg';

import cc1 from '../../images/cc/cc1.jpeg';
import cc2 from '../../images/cc/cc2.jpeg';
import cc3 from '../../images/cc/cc3.jpeg';
import cc4 from '../../images/cc/cc4.jpg';
import cc5 from '../../images/cc/cc5.jpg';
import cc6 from '../../images/pw/pw6.jpg';

const ImageGridContainer = styled.div`
    margin-bottom: 6vw;
`;

const ImageGrid = (props) => {

    let images = [];
    
    const imageObj = {
        images: [
            { title: "wc", imagePath: [wc1, wc2, wc3, wc4, wc5, wc6] },
            { title: "gc", imagePath: [gc1, gc2, gc3, gc4, gc5, gc6] },
            { title: "pw", imagePath: [pw1, pw2, pw3, pw4, pw5, pw6] },
            { title: "cc", imagePath: [cc1, cc2, cc3, cc4, cc5, cc6] },
        ]
    }

    for (let i in imageObj.images) {
        if (imageObj.images[i].title === props.title){
            for (let j in imageObj.images[i].imagePath) {
                images.push(imageObj.images[i].imagePath[j]);  
            }
        }
    }

    return (
            <ImageGridContainer>
                <Container>
                    <Row className="d-flex justify-content-center">
                        {images.map((imagePath, index) => 
                            <Col lg={4} md={12} mb={3} key={index}>
                                    <Image
                                        src={imagePath}
                                        className="w-100 shadow-1-strong mb-3"
                                    />
                            </Col>
                        )}
                    </Row>
                </Container>
            </ImageGridContainer>
        ) 
}

export default ImageGrid;