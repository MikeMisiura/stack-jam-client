import ProductList from '../components/ProductList';
import { Container } from 'react-bootstrap';


export default function Home() {

    return (
        <>
            <Container>
                <h1>Welcome to the Stack Jam Website!</h1>
            </Container>

            <ProductList />
        </ >
    );
}