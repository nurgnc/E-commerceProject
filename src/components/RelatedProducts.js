import React from 'react'
import './RelatedProducts.css'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import CardRelated from './CardRelated'

const RelatedProducts = () => {
    return (
        <>
            <div className="title container mt-5">
                <p>Öne Çıkan Ürünler</p>
                <Link to="/onecikanlar"><button>TÜM ÖNE ÇIKANLAR <FaArrowRight /></button></Link>
            </div>
            <div className="products container">
                <CardRelated />
            </div>
        </>
    )
}

export default RelatedProducts
