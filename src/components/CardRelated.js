import React from 'react'
import { Card } from 'react-bootstrap'
import relatedProducts from './data/relatedProducts.json'
import './CardRelated.css'

const CardRelated = () => {
    return (
        <>
            <div className="product-group">
                    {relatedProducts.map((data) => {
                        return (
                            <Card className="product-card">
                                <img src={data.img} />
                                <Card.Body>
                                    <Card.Title>{data.title}</Card.Title>
                                    <Card.Text>{data.code}</Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small>{data.samedayshipping="true" ? "Bugün Kargoda" : ""}</small>
                                </Card.Footer>
                            </Card>
                        )
                    })}
            </div>
        </>
    )
}

export default CardRelated
