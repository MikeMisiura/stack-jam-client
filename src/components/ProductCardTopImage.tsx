import { Col, Card, Button } from 'react-bootstrap';
import { IProduct } from '../@types/product';
import StackJamColors from '../theme/stackJamColors';
import { useContext } from 'react';
import ProductContext from '../contexts/ProductContext';
import UserContext from '../contexts/UserContext';

interface ProductProps { product: IProduct }

const ProductCardTopImage: React.FC<ProductProps> = ({ product }): JSX.Element => {

    let { toggleFeatured } = useContext(ProductContext);

    const { admin } = useContext(UserContext)

    // const goToEtsy = (product) => {na}

    const imgSrc: string = `/images/products/${product.groupCode}_${product.color.replace(" ", "-")}.jpg`

    return (
        <Col
            key={product._id}
            xs={12}
            // sm={6}
            md={6}
            // xl={4}
        >
            <Card
                style={{
                    backgroundColor: StackJamColors.red,
                    color: StackJamColors.white
                }}
            >
                <Card.Img variant="top" src={imgSrc} />
                <Card.Body>
                    <Card.Title>{product.productName} | ${product.price}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                    {/* <Card.Text>Color: {product.color}</Card.Text> */}
                    {/* {product.etsy && <Button
                            onClick={() =>  window.location.href='product.etsy?'}
                            variant="primary"
                        >Etsy Page</Button>} */}
                    {admin && <div>
                        {product.featured && <Card.Text>Featured Product!</Card.Text>}
                        <Button
                            onClick={() => { toggleFeatured(product) }}
                            variant="primary"
                        >Toggle Featured</Button>
                    </div>}
                </Card.Body>
            </Card>
        </Col>
    )
}



export default ProductCardTopImage