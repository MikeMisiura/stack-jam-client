import { Container, Row } from 'react-bootstrap';
import { useContext } from 'react';
import MessageContext from '../contexts/MessageContext';
import ProductContext from '../contexts/ProductContext';
import ProductCardTopImage from '../components/ProductCardTopImage';
import { IProduct } from '../@types/product';


export default function AllProducts() {

    let { createMessage } = useContext(MessageContext);

    return (
        <div>

            <ProductContext.Consumer>{({ product }) => {
                return <>
                    <Container className='m-5'>
                        <h2>Check out these amazing products!</h2>
                        <Row className='p-3'>
                            {product.map((product: IProduct) => {
                                return <ProductCardTopImage key={product._id} product={product} />
                            })}
                        </Row>
                    </Container>
                </>
            }}</ProductContext.Consumer>
        </div >
    );
}