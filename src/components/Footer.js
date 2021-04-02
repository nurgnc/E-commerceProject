import React from 'react'
import "./Footer.css";
import { Link } from 'react-router-dom'
import { MenuItems } from './Items/MenuItems';
import { Corporate } from './Items/Corporate';
import { SpecialProduct } from './Items/SpecialProduct';
import { Col, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    {/* Column1 */}
                    <div className="col">
                        <h4>KURUMSAL</h4>
                        <ul className="list-unstyled" >
                            {Corporate.map((item, index) => {
                                return (
                                    <li key={index} >
                                        <Link
                                            className={item.cName}
                                            to={item.path}
                                        >
                                            {item.title}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    {/* Column2 */}
                    <div className="col">
                        <h4>KATEGORİLER</h4>
                        <ul className="list-unstyled">
                            {MenuItems.map((item, index) => {
                                return (
                                    <li key={index} >
                                        <Link
                                            className={item.cName}
                                            to={item.path}
                                        >
                                            {item.title}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    {/* Column3 */}
                    <div className="col">
                        <h4>ÖZEL ÜRÜNLER</h4>
                        <ul className="list-unstyled">
                            {SpecialProduct.map((item, index) => {
                                return (
                                    <li key={index} >
                                        <Link
                                            className={item.cName}
                                            to={item.path}
                                        >
                                            {item.title}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
                <hr />
                <Row className="d-flex justify-content-around">
                    <Row>
                        <Col>
                            <p className="col-sm footer-link font-weight-bold">Türkiye'nin Teknoloji Hiperstoru</p>
                            <p className="col-sm footer-link">Copyright {new Date().getFullYear()} Vatan Bilgisayar San. ve Tic. A.Ş.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <img className="m-2" height="40" src="https://shoplineimg.com/assets/footer/card_master.png"/>
                            <img className="m-2" height="40" src="https://shoplineimg.com/assets/footer/card_visa.png"/>
                            <img className="m-2" height="40" src="https://shoplineimg.com/assets/footer/card_amex.png"/>
                        </Col>
                    </Row>
                </Row>
            </div>
        </div>
    )
}

export default Footer

