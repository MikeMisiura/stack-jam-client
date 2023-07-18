import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import moduleName from 'module';
import UserContext from '../contexts/UserContext';
import { useContext } from 'react';
import StackJamColors from '../theme/stackJamColors';
import { Image, NavDropdown } from 'react-bootstrap';

export default function MyNavbar() {

  const { admin } = useContext(UserContext)

  return (
    <Navbar
      style={{
        backgroundColor: StackJamColors.blue,
        color: StackJamColors.white
      }}
      variant="dark"
    >
      <Container>
        <Navbar.Brand href="/">
          <Image
            alt="logo"
            src='/images/logos/logo.png'
            width="75"
            height="75"
            className="d-inline-block align-top"
          />{' '}
          Stack Jam
        </Navbar.Brand>
      </Container>
      <Container style={{ justifyContent: "right" }}>
        <Nav className="me-4">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about-us">Our Story</Nav.Link>
          <Nav.Link href="/contact-us">Contact Us</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}