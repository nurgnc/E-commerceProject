import React from 'react'
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SliderImages } from './Items/SliderImages'
import './Header.css'
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';

SwiperCore.use([Navigation, Pagination, A11y]);

const Header = () => {
    return (
        <Swiper
            className="container swiper-slider"
            navigation
            pagination={{ clickable: true }}
            spaceBetween={30}
            slidesPerView={2}
        >
        {SliderImages.map((slide, index) => {
            return ( 
                <SwiperSlide className="slider-images">
                    <img key={index} src={slide.image} alt="Slider Image" />
                </SwiperSlide>
            )
        })}
        </Swiper>
    )
}

export default Header
