import ProductList from '../components/ProductList';
import { Button, Container, Ratio } from 'react-bootstrap';
import CartContext from '../contexts/CartContext';
import { useContext } from 'react';
import { ICartProduct } from '../@types/product';


export default function Home() {

    let { addToCart, cart, removeFromCart } = useContext(CartContext);


    function handleAddClick() {

        let product: ICartProduct = {
            "_id": "6488a8f38366b460d3e5acfe",
            "productName": "Sample Product",
            "color": "red",
            "description": "description of Sample Product",
            "price": 32,
            "quantity": 2,
            "groupCode": "sample",
            "createdAt": "2023-06-13T17:35:47.486Z",
            "updatedAt": "2023-06-13T17:35:47.486Z",
            "__v": 0
        }

        addToCart(product)
    }

    function handleRemoveOneClick() {

        let product: ICartProduct = {
            "_id": "6488a8f38366b460d3e5acfe",
            "productName": "Sample Product",
            "color": "red",
            "description": "description of Sample Product",
            "price": 32,
            "quantity": -1,
            "groupCode": "sample",
            "createdAt": "2023-06-13T17:35:47.486Z",
            "updatedAt": "2023-06-13T17:35:47.486Z",
            "__v": 0
        }


        addToCart(product)
    }

    function handleRemoveClick() {

        let product: ICartProduct = {
            "_id": "6488a8f38366b460d3e5acfe",
            "productName": "Sample Product",
            "color": "red",
            "description": "description of Sample Product",
            "price": 32,
            "quantity": 1,
            "groupCode": "sample",
            "createdAt": "2023-06-13T17:35:47.486Z",
            "updatedAt": "2023-06-13T17:35:47.486Z",
            "__v": 0
        }


        removeFromCart(product)
    }

    function handleCartClick() {
        if (cart[0]) {
            console.log(cart[0].quantity)
        }
        
        console.log(cart)
    }

    return (
        <div>

            <Container>
            <Button className='m-2' onClick={handleAddClick}>add to cart</Button>
            <Button className='m-2' onClick={handleRemoveOneClick}>remove 1 from cart</Button>
            <Button className='m-2' onClick={handleRemoveClick}>remove from cart</Button>
            <Button className='m-2' onClick={handleCartClick}>whats in cart</Button>
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