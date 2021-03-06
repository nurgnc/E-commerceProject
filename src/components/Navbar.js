import React from 'react'
import { Link } from 'react-router-dom'
//Styles
import './Navbar.css'
import { Nav, Navbar, Form, FormControl, Dropdown } from 'react-bootstrap';
//Icons
import { FaBars, FaUserCircle, FaShoppingCart} from 'react-icons/fa'
import { IoIosPhonePortrait } from 'react-icons/io'
import { MdComputer, MdMonochromePhotos } from 'react-icons/md'
import {  GiGamepad } from 'react-icons/gi'
import { RiComputerLine } from 'react-icons/ri'
import { FiCpu, FiHeadphones } from 'react-icons/fi'
import { HiChevronRight, HiOutlineHome, HiOutlinePrinter } from 'react-icons/hi'
//Redux
import { connect } from 'react-redux';

const NavBar = (props) => {

    return (
        <div className="navbar fixed-top container px-5" style={{ background: "#1564C0" }}>
            <Navbar expand="lg">
                <Navbar.Brand href="/">
                    <img src="/vatanlogo.svg" width="120" height="50" className="d-inline-block align-top" alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="navbar" id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link className="text-light"></Nav.Link>
                        <Dropdown>
                            <Dropdown.Toggle className="text-light" variant="white" id="dropdown-basic">
                                <FaBars className="navbar-icon"/> Kategoriler
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="menu">
                                <Dropdown.Item className="item" href="#/telefon"><IoIosPhonePortrait className="icon" />Telefon <HiChevronRight className="icon-right" /></Dropdown.Item>
                                <Dropdown.Item  className="item"href="#/bilgisayar"><MdComputer className="icon" />Bilgisayar <HiChevronRight className="icon-right" /></Dropdown.Item>
                                <Dropdown.Item className="item" href="#/bilgisayarparcalari"><FiCpu className="icon"/>Bilgisayar Par??alar?? <HiChevronRight className="icon-right" /></Dropdown.Item>
                                <Dropdown.Item className="item" href="#/fotografvekamera"><MdMonochromePhotos className="icon" />Foto??raf & Kamera <HiChevronRight className="icon-right" /></Dropdown.Item>
                                <Dropdown.Item className="item" href="#/tvevelektronigi"><RiComputerLine className="icon"/>TV & Ev Elektroni??i <HiChevronRight className="icon-right" /></Dropdown.Item>
                                <Dropdown.Item className="item" href="#/ofismalzemeleri"><HiOutlinePrinter className="icon"/>Ofis Malzemeleri <HiChevronRight className="icon-right" /></Dropdown.Item>
                                <Dropdown.Item className="item" href="#/aksesuarlar"><FiHeadphones className="icon"/>Aksesuarlar <HiChevronRight className="icon-right" /></Dropdown.Item>
                                <Dropdown.Item className="item" href="#/oyunvehobi"><GiGamepad  className="icon"/>Oyun & Hobi <HiChevronRight className="icon-right" /></Dropdown.Item>
                                <Dropdown.Item className="item" href="#/evaletlerivekisiselbakim"><HiOutlineHome className="icon" />Ev Aletleri & Ki??isel Bak??m <HiChevronRight className="icon-right" /></Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav>
                    <Form inline className="px-5 form">
                        <FormControl type="text" placeholder="??r??n Ara" className="mr-sm-2 text-center form-item" />
                    </Form>
                    <Nav.Link className="text-light" href="#">??yelik <FaUserCircle className="navbar-icon"/></Nav.Link>
                    <Nav.Link className="text-light" href="#">Sepetim 
                        <div className="navcart">
                            <span>{props.cart.length}</span>
                            <Link href="/cart"><FaShoppingCart className="navbar-icon"/></Link>
                        </div>
                    </Nav.Link>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    };
};
export default connect(mapStateToProps)(NavBar);
