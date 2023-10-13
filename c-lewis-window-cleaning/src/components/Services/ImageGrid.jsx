import React from 'react';

import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import wc5 from '../../images/wc/wc5.jpg';
import wc6 from '../../images/wc/wc6.jpg';
import wc7 from '../../images/wc/wc7.jpg';
import wc8 from '../../images/wc/wc8.jpg';
import wc10 from '../../images/wc/wc10.jpg';
import wc11 from '../../images/wc/wc11.jpg';

import gc1 from '../../images/gc/gc1.jpeg';
import gc2 from '../../images/gc/gc2.jpeg';
import gc3 from '../../images/gc/gc3.jpeg';
import gc4 from '../../images/gc/gc4.jpg';
import gc5 from '../../images/gc/gc5.jpg';
import gc6 from '../../images/gc/gc6.jpeg';

const ImageGrid = (props) => {

    let images = [];
    
    const imageObj = {
        images: [
        {title:"wc", imagePath:[wc11, wc5, wc8, wc7, wc6, wc10]},
        {title:"gc", imagePath:[gc1, gc2, gc6, gc4, gc5, gc3]},
        {title:"pw", imagePath:["500", "Panda"]}
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
            <div className='image-grid-container'>
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
            </div>
        ) 
}

export default ImageGrid;