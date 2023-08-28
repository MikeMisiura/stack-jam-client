import { Card, Col, Container, Image } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function MyCarousel() {
    return (

        <Carousel controls={true} interval={3000}>
            <Carousel.Item>
                <Image src='/images/carousel1.jpg' fluid />
            </Carousel.Item>
            <Carousel.Item>
                <Image src='/images/carousel2.jpg' fluid />
            </Carousel.Item>
            <Carousel.Item>
                <Image src='/images/carousel3.jpg' fluid />
            </Carousel.Item>
            <Carousel.Item>
                <Image src='/images/carousel4.jpg' fluid />
            </Carousel.Item>
        </Carousel>


    );
}

export default MyCarousel;