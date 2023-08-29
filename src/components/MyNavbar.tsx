import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import StackJamColors from '../theme/stackJamColors';
import { Image } from 'react-bootstrap';
import "../theme/Global.css"
import BuyNowButton from './BuyNowButton';

export default function MyNavbar() {

  return (
    <Navbar
      style={{
        backgroundColor: StackJamColors.red,
        color: StackJamColors.white
      }}
      className='comic px-3'
      variant="dark"
      expand="md"
    >
      <Navbar.Brand href="/home">
        <Container>
          <Image
            alt="logo"
            src='/images/logos/logo.png'
            width="75"
            height="75"
            className="d-inline-block align-top"
          />
          <span className='h1 ms-2'>Stack Jam</span>
        </Container>
      </Navbar.Brand>

      {/* <div className='d-none d-sm-block d-md-none'>
        <BuyNowButton />
      </div> */}

      {/* <Container style={{ justifyContent: "right" }}> */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end p-3">
        <Nav className="me-5">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/about-us">Our Story</Nav.Link>
          <BuyNowButton />
          {/* <Nav.Link href="https://www.etsy.com/shop/StackJam" target="_blank">Order now on Etsy!</Nav.Link> */}
          {/* <Nav.Link href="/contact-us">Contact Us</Nav.Link> */}
        </Nav>
      </Navbar.Collapse>
      {/* </Container> */}
    </Navbar>
  );
}

