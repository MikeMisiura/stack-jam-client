import ProductList from '../components/ProductList';
import { Container } from 'react-bootstrap';
import "../theme/Global.css"

export default function Home() {

    return (
        <>
            <Container>
                <h1 className='comic'>Welcome to the Stack Jam Website!</h1>
            </Container>
            <Container className='mx-auto center p-3'>
                <iframe
                    width="315"
                    height="560"
                    src="https://www.youtube.com/embed/mxqHafZZlnU"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className='px-auto'
                ></iframe>
            </Container >
            <ProductList />
        </ >
    );
}