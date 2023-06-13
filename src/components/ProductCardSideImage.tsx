import { Col, Row, Image } from 'react-bootstrap';
import { IProduct } from '../@types/product';

interface ProductProps { product: IProduct }

const ProductCardSideImage: React.FC<ProductProps> = ({ product }): JSX.Element => {

    const imgSrc: string = `/images/products/${product.groupCode}${product.color}.jpg`

    return (
        <Row className='p-3' key={product._id}>
            <Col 
                xs={12} 
                sm={8} 
                md={{ span: 4, offset: 1}} 
                xl={{ span: 4, offset: 1}} 
            >
                <Image src={imgSrc} fluid rounded />
            </Col>
            <Col 
                xs={12} 
                sm={4} 
                md={{ span: 4, offset: 1 }} 
                xl={{ span: 4, offset: 1 }} 
            >
            <h2>{product.productName} | ${product.price}</h2>
            <p>{product.description}</p>
            <p>{product.color}</p>
            <p>Id: {product._id}</p>
            </Col>
        </Row>
    )
}

export default ProductCardSideImage