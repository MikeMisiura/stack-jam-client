import ProductList from '../components/ProductList';
import { Button, Container, Ratio } from 'react-bootstrap';
import CartContext from '../contexts/CartContext';
import { useContext } from 'react';
import { ICartProduct } from '../@types/product';
import MessageContext from '../contexts/MessageContext';


export default function Home() {

    let { createMessage } = useContext(MessageContext);


    function handleClick() {

        createMessage()
    }

    return (
        <div>

            <Container>
            <Button className='m-2' onClick={handleClick}>Send Email</Button>
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
        </div >
    );
}