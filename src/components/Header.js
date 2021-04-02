import React from 'react'
import {SliderImages} from './Items/SliderImages'
import './Header.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

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

const Header = () => {
    const settings = {
        dots: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        infinite: true,
        speed: 100,
        autoPlay: true,
        slidesToShow: 3,
        slidesToScroll: 3
    };
    return (
        <>
            <Slider {...settings} className="container product-slider">
                {SliderImages.map((slide, index) => {
                    return (
                        <div className="slider-images">
                            <img key={index} className="slider-item" src={slide.image} alt="Slider Image" />
                        </div>
                    )
                })}
            </Slider>
        </>
    )
}

export default Header
