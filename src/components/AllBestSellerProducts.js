import React from 'react'
import bestSeller from "./data/bestSeller.json";
import "./CardRelated.css";
import { Link } from 'react-router-dom'
import { AiFillStar } from 'react-icons/ai'

const AllBestSellerProducts = () => {
    return (
        <div className="product container">
            <div className="title container mt-5">
                <p>Çok Satanlar</p>
            </div>
            {bestSeller.map(data => {
                return (
                    <div className="card" key={data.code}>
                        <Link to={`/onecikanlar/${data.dest_url}`}>
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
                            <div style={{ background: '#cac7c7' }}>
                                {(data.samedayshipping = "true" ? "Bugün Kargoda" : "")}
                            </div>
                        </div>

                    </div>
                )
            })}
        </div>
    )
}

export default AllBestSellerProducts
