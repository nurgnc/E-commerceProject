import React from 'react'
//Routing
import { Link } from 'react-router-dom'
//Data
import bestSeller from "./data/bestSeller.json";
//Styles
import "./CardRelated.css";
//Icons
import { AiFillStar } from 'react-icons/ai'
import { FaArrowRight } from 'react-icons/fa'
//Slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//Redux
import { connect } from 'react-redux';
import { addToCart } from '../store/actions/AddToCart';
import { isHovering } from '../store/actions/IsHovering';


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "gray" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "gray" }}
            onClick={onClick}
        />
    );
}

const BestSellerProducts = (props) => {
    const settings = {
        className: "slider variable-width",
        dots: true,
        infinite: true,
        speed: 100,
        autoPlay: true,
        autoplaySpeed: 100,
        cssEase: "linear",
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <div className="title container mt-5">
                <p>Çok Satanlar</p>
                <Link to="/coksatanlar"><button>TÜM ÇOK SATANLAR <FaArrowRight /></button></Link>
            </div>
            <div onMouseEnter={() => props.isHovering(true)} onMouseLeave={() => props.isHovering(false)}>
                <Slider {...settings} className="product container">
                    {bestSeller.map(data => {
                        return (
                            <div className="card" key={data.code}>
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
                                    <div className={`${props.hover ? "d-none": ""}`} style={{ background: '#dbd5d5' }}>
                                    {(data.samedayshipping = "true" ? "Bugün Kargoda" : "")}
                                </div>
                                <button className={`${props.hover ? "" : "d-none"}`} onClick={() => props.addToCart(data)}>SEPETE EKLE</button>
                                </div>

                            </div>
                        )
                    })}
                </Slider>
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
        hover: state.hover
    };
};

export default connect(mapStateToProps, { addToCart, isHovering })(BestSellerProducts)
