import ProductList from '../components/ProductList';
import { Button, Container, Ratio } from 'react-bootstrap';
import { useContext } from 'react';
import MessageContext from '../contexts/MessageContext';


export default function Home() {

    return (
        <>
            <Container>
                <h1>Welcome to the Stack Jam Website!</h1>
                <Ratio className='mt-3' aspectRatio="16x9">
                    <iframe
                        src='https://www.youtube.com/embed/6sd4As27ol4'
                        allow='autoplay; encrypted-media'
                        allowFullScreen
                        title='video'
                    />
                </Ratio>
            </Container>

            <ProductList />
        </ >
    );
}