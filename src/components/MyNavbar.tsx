import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import StackJamColors from '../theme/stackJamColors';
import { Image } from 'react-bootstrap';
import "../theme/Global.css"

export default function MyNavbar() {

  return (
    <Navbar
      style={{
        backgroundColor: StackJamColors.red,
        color: StackJamColors.white
      }}
      className='comic'
      variant="dark"
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
      <Container style={{ justifyContent: "right" }}>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav className="me-5">
          <Nav.Link href="/home">Home</Nav.Link>

          <Nav.Link href="/about-us">Our Story</Nav.Link>
          <Nav.Link href="https://www.etsy.com/shop/StackJam" target="_blank">Order now on Etsy!</Nav.Link>
          {/* <Nav.Link href="/contact-us">Contact Us</Nav.Link> */}
        </Nav>
      </Container>
    </Navbar>
  );
}

