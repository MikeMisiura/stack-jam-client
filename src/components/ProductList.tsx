import ProductContext from '../contexts/ProductContext';
import { IProduct } from '../@types/product';
import { Container } from 'react-bootstrap';
import ProductCard from './ProductCard';


const ProductList = () => {

    return (
        <ProductContext.Consumer>
        {
            ({ product }) => {
                return <Container>
                        {product.map((product: IProduct) => {
                            return <ProductCard product={product} />
                        })}
                </Container>
            }
        }
        </ProductContext.Consumer>
    );
}

export default ProductList;