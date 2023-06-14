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
      expand="lg"
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
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about-us">Our Story</Nav.Link>
            <Nav.Link href="/contact-us">Contact Us</Nav.Link>
            <Nav.Link href="/sign-in">Sign In</Nav.Link>
            <Nav.Link href="/sign-up">Sign Up</Nav.Link>
            {admin && <NavDropdown title="Admin" id="admin-dropdown">
              <NavDropdown.Item href="/admin/add-product">Add Product</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/admin/view-messages">View Messages</NavDropdown.Item>
            </NavDropdown>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

<NavDropdown title="Dropdown" id="basic-nav-dropdown">
  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
  <NavDropdown.Item href="#action/3.2">
    Another action
  </NavDropdown.Item>
  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
  <NavDropdown.Divider />
  <NavDropdown.Item href="#action/3.4">
    Separated link
  </NavDropdown.Item>
</NavDropdown>