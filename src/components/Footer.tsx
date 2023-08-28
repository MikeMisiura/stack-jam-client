import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import StackJamColors from '../theme/stackJamColors';
import { Image } from 'react-bootstrap';
import "../theme/Global.css"
import BuyNowButton from './BuyNowButton';

export default function Footer() {

  return (
    <Navbar
      style={{
        backgroundColor: StackJamColors.red,
        color: StackJamColors.white
      }}
      className='comic'
      variant="dark"
    >
      <Container className='spaceAround' >
          <Nav.Link href="/home">Home</Nav.Link>
          <BuyNowButton />
          <Nav.Link href="/about-us">Our Story</Nav.Link>
      </Container>
    </Navbar>
  );
}

