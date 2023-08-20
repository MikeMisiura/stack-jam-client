import { IProduct } from '../@types/product';
import { Container, Row } from 'react-bootstrap';
import ProductCardTopImage from './ProductCardTopImage';
import products from '../content/Products';
import "../theme/Global.css"

const ProductList = () => {

    return (
        <Container className='mt-5 comic'>
            <h2>Check out these amazing products!</h2>
            <Row className='pt-3'>
                {products.map((product: IProduct) => {
                    return <ProductCardTopImage key={product._id} product={product} />
                })}
            </Row>
        </Container>
    );
}

export default ProductList;