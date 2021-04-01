import React from 'react'
import { Card } from 'react-bootstrap'
import relatedProducts from './data/relatedProducts.json'
import './CardRelated.css'
import { Link } from "react-router-dom";

const CardRelated = () => {
    return (
        <>
            <div className="product-group">
                {relatedProducts.filter((data, idx) => idx < 3).map(data => {
                        return (
                            <Link key={data.code} to={data.dest_url}>
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
                        )
                })}
            </div>
        </>
    )
}

export default CardRelated
