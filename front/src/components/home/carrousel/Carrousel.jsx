import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import slider1 from '../../img/imgHome/slider1.png';
import slider2 from '../../img/imgHome/slider2.png';
import slider3 from '../../img/imgHome/slider3.png';

const MyCarousel = () => {
    return (
        <Carousel className='container-fluid'>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={slider1}
            alt="First slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={slider2}
            alt="Second slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={slider3}
            alt="Third slide"
            />
        </Carousel.Item>
        </Carousel>
    );
};

export default MyCarousel;