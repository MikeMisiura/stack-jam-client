import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import UserContext from '../contexts/UserContext';
import { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';


export default function AdminNavbar({ children }: any) {

    const { admin } = useContext(UserContext)
    let navigate = useNavigate()

    console.log(admin)

    useEffect(() => {
        if (admin != 'true') {
            console.log('not an admin')
            navigate('/sign-in')
        }
    })


    return (
        <div>
            <Navbar bg="light" variant="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/admin">
                        <img
                            alt="logo"
                            src='/logo.png'
                            width="75"
                            height="75"
                            className="d-inline-block align-top"
                        />{' '}
                        Welcome Admin!
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/admin">Admin Page</Nav.Link>
                            <Nav.Link href="/admin/add-product">Add Product</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            { children }
        </div>
    );
}

