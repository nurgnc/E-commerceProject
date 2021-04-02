import React, { useState } from 'react'
import relatedProducts from './data/relatedProducts.json'
import './CardRelated.css'
import { Link } from "react-router-dom";
import { AiFillStar } from 'react-icons/ai'

const CardRelated = (props) => {
    const [count, setCount] = useState(0);

    const IncNum = () => {
        setCount(count + 1);
    }
    return (
        <>
            <div className="product">
                {relatedProducts.filter((data, idx) => idx < 3).map(data => {
                        return (
                            <div className="card" key={data.code}>
                                <Link to={`/onecikanlar/${data.dest_url}`}>
                                    <img src={data.img} alt={data.title}/>
                                </Link>
                                <div className="content">
                                    <p><span style={{color: "#ffab3d"}}><AiFillStar /> {data.rating}</span> ({data.comment} Yorum)</p>
                                    <p>{data.code}</p>
                                    <h6>
                                        <Link to={`/onecikanlar/${data.dest_url}`} style={{ textDecoration: "none" }}>
                                            {data.title}
                                        </Link>
                                    </h6>
                                    
                                    <span className="data-price">&#8378; {data.price}</span>
                                    <div style={{background: '#cac7c7'}}>
                                            {(data.samedayshipping = "true" ? "Bugün Kargoda" : "")}
                                    </div>
                                    <button value={props.count} onClick={IncNum}>SEPETE EKLE</button>
                                </div>
                                    
                            </div>
                        )
                })}
            </div>
        </>
    )
}

export default CardRelated
