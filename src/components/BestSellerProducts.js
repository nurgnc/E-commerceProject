import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './RelatedProducts.css'


const BestSellerProducts = () => {
    return (
        <>
            <div className="title container mt-5">
                <p>Çok Satanlar</p>
                <Link to="/coksatanlar"><button>TÜM ÇOK SATANLAR <FaArrowRight /></button></Link>
            </div>
        </>
    )
}

export default BestSellerProducts
