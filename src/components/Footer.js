import React, {useState} from 'react'
import "./Footer.css";
import { Link } from 'react-router-dom'
import { MenuItems } from './MenuItems';

const Footer = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(click);
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    {/* Column1 */}
                    <div className="col">
                        <h4>Kurumsal</h4>
                        <ul className="list-unstyled">
                            <li><Link className="footer-link" to="/hakkimizda">Hakkımızda</Link></li>
                            <li><Link className="footer-link" to="/musterihizmetleri">Müşteri Hizmetleri</Link></li>
                            <li><Link className="footer-link" to="/siparisasamalari">Sipariş Aşamaları</Link></li>
                            <li><Link className="footer-link" to="/sorular">Sık Sorulan Sorular</Link></li>
                            <li><Link className="footer-link" to="/ik">İnsan Kaynakları</Link></li>
                            <li><Link className="footer-link" to="/gizlilikpolitikasi">Gizlilik Politikamız</Link></li>
                            <li><Link className="footer-link" to="/iletisim">İletişim</Link></li>
                            <li><Link className="footer-link" to="/vatancard">Vatan Card</Link></li>
                            <li><Link className="footer-link" to="/servistakip">Servis Takip Formu</Link></li>
                            <li><Link className="footer-link" to="/magazalar">Mağazalar</Link></li>
                            <li><Link className="footer-link" to="/islemrehberi">İşlem Rehberi</Link></li>
                        </ul>
                    </div>
                    {/* Column2 */}
                    <div className="col">
                        <h4>Stuff</h4>
                            <ul className="list-unstyled">
                                {MenuItems.map((item, index) => {
                                    return (
                                        <li key={index} className="footer-link">
                                            <Link
                                                className={item.cName}
                                                to={item.path}
                                                onClick={() => setClick(false)}
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
                        <h4>WELL ANOTHER COLUMN</h4>
                        <ui className="list-unstyled">
                            <li>DANK MEMES</li>
                            <li>OTHER STUFF</li>
                            <li>GUD STUFF</li>
                        </ui>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} THICC MEMES | All rights reserved |
            Terms Of Service | Privacy
          </p>
                </div>
            </div>
        </div>
    )
}

export default Footer

