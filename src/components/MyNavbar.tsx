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
      expand="md"
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
            <Nav.Link href="/contact-us">Contact Us</Nav.Link>
            <Nav.Link
              href="https://www.etsy.com/shop/StackJam"
              target="_blank"
            >
              Order Now on Etsy
            </Nav.Link>
            {/* <Nav.Link href="/sign-in">Sign In</Nav.Link>
            <Nav.Link href="/sign-up">Sign Up</Nav.Link> */}
            {admin && <NavDropdown title="Admin" id="admin-dropdown">
            <NavDropdown.Item href="/admin/add-product">Add Product</NavDropdown.Item>
            <NavDropdown.Item href="/admin/all-products">View All Products</NavDropdown.Item>
              {/* <NavDropdown.Divider />
              <NavDropdown.Item href="/admin/view-messages">View Messages</NavDropdown.Item> */}
            </NavDropdown>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


