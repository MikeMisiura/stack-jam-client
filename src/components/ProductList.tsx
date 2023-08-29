import { IProduct } from '../@types/product';
import { Col, Container, Row } from 'react-bootstrap';
import ProductCardTopImage from './ProductCardTopImage';
import products from '../content/Products';
import "../theme/Global.css"

const ProductList = () => {

    return (
        <Container className='mt-5 comic'>
            <h2 style={{ textAlign: 'center' }}>Check out these amazing products!</h2>
            <Row className='pt-3'>

                {products.map((product: IProduct) => {
                    return (
                        <Col className='my-3' xs={{ span: 10, offset: 1 }} md={{ span: 6, offset: 0 }} lg='4'>
                            <ProductCardTopImage key={product._id} product={product} />
                        </Col>
                    )
                })}
            </Row>
        </Container>
    );
}

export default ProductList;