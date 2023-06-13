import ProductContext from '../contexts/ProductContext';
import { IProduct } from '../@types/product';
import { Container, Row } from 'react-bootstrap';
import ProductCardSideImage from './ProductCardSideImage';
import ProductCardTopImage from './ProductCardTopImage';


const ProductList = () => {

    return (
        <ProductContext.Consumer>{({ product }) => {
            return <>
                <Container className='m-5'>
                    <h2>Check out these amazing products!</h2>
                    {product.map((product: IProduct) => {
                        return <ProductCardSideImage product={product} />
                    })}
                </Container>
                <Container className='m-5'>
                    <h2>Check out these amazing products!</h2>
                    <Row className='p-3'>
                        {product.map((product: IProduct) => {
                            return <ProductCardTopImage product={product} />
                        })}
                    </Row>
                </Container>
            </>
        }}</ProductContext.Consumer>
    );
}

export default ProductList;