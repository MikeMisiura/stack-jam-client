import { Col, Card } from 'react-bootstrap';
import { IProduct } from '../@types/product';
import StackJamColors from '../theme/stackJamColors';
import "../theme/Global.css"

interface ProductProps { product: IProduct }

const ProductCardTopImage: React.FC<ProductProps> = ({ product }): JSX.Element => {

    const imgSrc: string = `/images/products/${product.groupCode}_${product.color.replace(" ", "-")}.jpg`

    return (
        <Col
            key={product._id}
            // xs={12}
            // sm={6}
            // md={4}
            // xl={3}
            className='comic'
        >
            <Card
                style={{
                    backgroundColor: StackJamColors.maroon,
                    color: StackJamColors.white
                }}
            >
                <Card.Img variant="top" src={imgSrc} />
                <Card.Body>
                    <Card.Title>{product.productName} | ${product.price}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                    {/* <Card.Text>Color: {product.color}</Card.Text> */}
                </Card.Body>
            </Card>
        </Col>
    )
}

export default ProductCardTopImage