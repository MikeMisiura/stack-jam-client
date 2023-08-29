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

        <Navbar.Brand href="/home">
          <Container>
            <Image
              alt="logo"
              src='/images/logos/logo.png'
              width="75"
              height="75"
              className="d-inline-block align-top"
              fluid
            />
          </Container>
        </Navbar.Brand>

        <Nav.Link href="/home">Home</Nav.Link>
        <BuyNowButton />
        <Nav.Link href="/about-us">Our Story</Nav.Link>

        <Navbar.Brand target='blank' href="https://www.madeinmontanausa.com/">
          <Container>
            <Image
              alt="logo"
              src='/images/MIM.png'
              width="55"
              height="55"
              className="d-inline-block align-top"
            />
          </Container>
        </Navbar.Brand>
        
      </Container>
    </Navbar>
  );
}

