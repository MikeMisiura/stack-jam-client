import ProductContext from '../contexts/ProductContext';
import { IProduct } from '../@types/product';
import { Container, Row } from 'react-bootstrap';
import ProductCardTopImage from './ProductCardTopImage';


const ProductList = () => {

    return (
        <ProductContext.Consumer>{({ product }) => {
            return <>
                <Container className='m-5'>
                    <h2>Check out these amazing products!</h2>
                    <Row className='p-3'>
                        {product.map((product: IProduct) => {
                            if (!product.featured) { return }
                            return <ProductCardTopImage key={product._id} product={product} />
                        })}
                    </Row>
                </Container>
            </>
        }}</ProductContext.Consumer>
    );
}

export default ProductList;