"use client";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { signOut } from 'next-auth/react';
function AdminWrapper() {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">Admin Panel</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/admin/products">Product Collaction</Nav.Link>
                        <Nav.Link href="/admin/order">Orders</Nav.Link>
                        <Nav.Link href="/admin/customize">Customize</Nav.Link>
                        <Nav.Link href="/admin/users">Users</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link eventKey={2} onClick={signOut}>
                            Logout
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default AdminWrapper;