import { Col, Row, Image, Button } from 'react-bootstrap';
import { ICartProduct } from '../@types/product';
import CartContext from '../contexts/CartContext';
import { useContext } from 'react';

interface ProductProps { product: ICartProduct }

const ProductCardShoppingCart: React.FC<ProductProps> = ({ product }): JSX.Element => {
    let { incrementQuantity, decrementQuantity, removeFromCart } = useContext(CartContext);

    const imgSrc: string = `/images/products/${product.groupCode}${product.color}.jpg`

    return (
        <Row className='p-3' key={product._id}>
            <Col
                xs={12}
                sm={8}
                md={{ span: 4, offset: 1 }}
                xl={{ span: 4, offset: 1 }}
            >
                <Image src={imgSrc} fluid rounded />
            </Col>
            <Col
                xs={12}
                sm={4}
                md={{ span: 4, offset: 1 }}
                xl={{ span: 4, offset: 1 }}
            >
                <h2>{product.productName}</h2>
                <p className='h2'>${product.price}</p>
                <p>{product.description}</p>
                <p>Color: {product.color}</p>
                <span>
                    <>Quantity: </>
                    <Button className='m-2' onClick={() => { incrementQuantity(product) }}>+</Button>
                    <> {product.quantity} </>
                    <Button className='m-2' onClick={() => { decrementQuantity(product) }}>-</Button>
                </span>
                <Button
                    onClick={() => { removeFromCart(product) }}
                    variant="danger"
                >Remove from Cart</Button>
            </Col>
        </Row>
    )
}

export default ProductCardShoppingCart

