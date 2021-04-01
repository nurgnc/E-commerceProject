import React from "react";
import { Card } from "react-bootstrap";
import bestSeller from "./data/bestSeller.json";
import "./CardRelated.css";
import { Link } from "react-router-dom";

const CardBestSeller = () => {
    return (
        <>
            <div className="product-group">
                {bestSeller.map((data) => {
                    return (
                        <Link to={data.dest_url}>
                            <Card className="product-card">
                                <Card.Header>{data.target}</Card.Header>
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
            </div>
        </>
    );
};

export default CardBestSeller;
