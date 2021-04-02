import React, { useState } from 'react'
import relatedProducts from './data/relatedProducts.json'
import './CardRelated.css'
import { Link } from "react-router-dom";
import { AiFillStar } from 'react-icons/ai'
//Redux
import { connect } from 'react-redux';
import { addToCart } from '../store/actions/AddToCart';

const CardRelated = (props) => {
    const [isHovering, setIsHovering] = useState(false);

    return (
        <>
            <div className="product" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
                {relatedProducts.filter((data, idx) => idx < 8).map(data => {
                    return (
                        <div className="card" key={data.code} >
                            <Link to={`/${data.dest_url}`}>
                                <img src={data.img} alt={data.title} />
                            </Link>
                            <div className="content">
                                <p><span style={{ color: "#ffab3d" }}><AiFillStar /> {data.rating}</span> ({data.comment} Yorum)</p>
                                <p>{data.code}</p>
                                <h6>
                                    <Link to={`/onecikanlar/${data.dest_url}`} style={{ textDecoration: "none" }}>
                                        {data.title}
                                    </Link>
                                </h6>

                                <span className="data-price">&#8378; {data.price}</span>
                                <div className={`${isHovering ? "d-none": ""}`} style={{ background: '#dbd5d5' }}>
                                    {(data.samedayshipping = "true" ? "Bugün Kargoda" : "")}
                                </div>
                                <button className={`${isHovering ? "" : "d-none"}`} onClick={() => props.addToCart(data)}>SEPETE EKLE</button>
                            </div>

                        </div>
                    )
                })}
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    };
};

export default connect(mapStateToProps, { addToCart })(CardRelated)
