import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import CardBestSeller from './CardBestSeller'
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
import { Col, Row } from 'react-bootstrap';

SwiperCore.use([Navigation, Pagination, A11y]);

const BestSellerProducts = () => {
    return (
        <>
            <div className="title container mt-5">
                <p>Çok Satanlar</p>
                <Link to="/coksatanlar"><button>TÜM ÇOK SATANLAR <FaArrowRight /></button></Link>
            </div>
            <>
                <Swiper
                    className="container card-slider"
                    navigation
                    pagination={{ clickable: true }}
                    spaceBetween={30}
                    slidesPerView={2}
                >
                    
                <CardBestSeller />
                </Swiper>
            </>
        </>
    )
}

export default BestSellerProducts
