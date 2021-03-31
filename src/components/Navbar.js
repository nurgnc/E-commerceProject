import React from 'react'
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import { FaBars, FaUserCircle, FaShoppingCart, FaSearch } from 'react-icons/fa'

const NavBar = () => {

    return (
        <div className="navbar container px-5" style={{ background: "#1564C0" }}>
            <Navbar expand="lg">
                <Navbar.Brand href="#home">
                    <img src="/vatanlogo.svg" width="120" height="50" className="d-inline-block align-top" alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link className="text-light"><FaBars /> Kategoriler</Nav.Link>
                    </Nav>
                    <Form inline className="px-5">
                        <FormControl type="text" placeholder="Ürün Ara" className="mr-sm-2 text-center" />
                    </Form>
                    <Nav.Link className="text-light" href="#">Üyelik <FaUserCircle /></Nav.Link>
                    <Nav.Link className="text-light" href="#">Sepetim <FaShoppingCart /></Nav.Link>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavBar
