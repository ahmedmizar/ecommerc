import React from 'react';
import { Col, Row } from 'reactstrap';
import "./Card.scss"
const Card = (props) => {
    return (
        <div className="product-card">
            <img src={props.urlToImage} />
            <h3>{props.pName}</h3>
            <Row>
                <Col xs="6">
                    <p>{props.pPrice}</p>

                </Col>
                <Col xs="6" className="text-right">
                    <p>{props.pSize}</p>
                </Col>
            </Row>
            <p></p>
        </div>
    );
}


export default Card;