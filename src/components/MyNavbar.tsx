import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import moduleName from 'module';
import UserContext from '../contexts/UserContext';
import { useContext } from 'react';
import StackJamColors from '../theme/stackJamColors';

export default function MyNavbar() {

  const { admin } = useContext(UserContext)

  return (
    <Navbar
      style={{
        backgroundColor: StackJamColors.blue,
        color: StackJamColors.white
      }}
      variant="dark"
      expand="lg"
    >
      <Container>
        <Navbar.Brand href="/">
          <img
            alt="logo"
            src='/logo.png'
            width="75"
            height="75"
            className="d-inline-block align-top"
          />{' '}
          Stack Jam
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about-us">Our Story</Nav.Link>
            <Nav.Link href="/sign-in">Sign In</Nav.Link>
            <Nav.Link href="/sign-up">Sign Up</Nav.Link>
            {admin && <Nav.Link href="/admin">Admin</Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

