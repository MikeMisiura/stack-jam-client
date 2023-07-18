import { IProduct } from '../@types/product';
import { Container, Row } from 'react-bootstrap';
import ProductCardTopImage from './ProductCardTopImage';
import products from '../content/Products';


const ProductList = () => {

    return (
        <Container className='m-5'>
            <h2>Check out these amazing products!</h2>
            <Row className='p-3'>
                {products.map((product: IProduct) => {
                    return <ProductCardTopImage key={product._id} product={product} />
                })}
            </Row>
        </Container>
    );
}

export default ProductList;