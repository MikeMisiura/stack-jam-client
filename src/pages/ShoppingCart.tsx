import { ICartProduct, IProduct } from '../@types/product';
import { Container, Row } from 'react-bootstrap';
import ProductCardShoppingCart from '../components/ProductCardShoppingCart';
import CartContext from '../contexts/CartContext';


const ShoppingCart = () => {

    return (
        <CartContext.Consumer>{({ cart }) => {
            return <Container className='m-5'>
                    <h2>Shopping Cart</h2>
                    <Row className='p-3'>
                        {cart.map((product: ICartProduct) => {
                            return <ProductCardShoppingCart key={product._id} product={product} />
                        })}
                    </Row>
                </Container>
        }}</CartContext.Consumer>
    );
}

export default ShoppingCart;