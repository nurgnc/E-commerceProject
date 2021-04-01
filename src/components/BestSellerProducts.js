import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import bestSeller from "./data/bestSeller.json";
import "./CardRelated.css";
import { Card } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const BestSellerProducts = () => {
    const settings = {
        className: "slider variable-width",
        dots: true,
        infinite: true,
        speed: 100,
        autoPlay: true,
        autoplaySpeed: 100,
        cssEase: "linear",
        slidesToShow: 3,
        slidesToScroll: 3
    };
    return (
        <>
            <div className="title container mt-5">
                <p>Çok Satanlar</p>
                <Link to="/coksatanlar"><button>TÜM ÇOK SATANLAR <FaArrowRight /></button></Link>
            </div>
            <>
                <Slider {...settings} className="container">
                    {bestSeller.map((data) => {
                        return (
                            <Link to={data.dest_url}>
                                <Card className="product-card">
                                    <Card.Body>
                                        <Card.Img src={data.img} />
                                        <Card.Title>{data.title}</Card.Title>
                                        <Card.Text>{data.code}</Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <small>
                                            {(data.samedayshipping = "true" ? "Bugün Kargoda" : "")}
                                        </small>
                                    </Card.Footer>
                                </Card>
                            </Link>
                        );
                    })}
                </Slider>
            </>

        </>
    )
}

export default BestSellerProducts
