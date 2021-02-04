
import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import "./Card.scss"
import ProductMdal from '../../components/Model/Model';

class Card extends Component {

    state = {
        isOpen: false,
    }
    render() {
        return (
            <div onClick={() => { this.details.toggleShow() }} className="product-card">
                <img src={this.props.urlToImage} />
                <h3>{this.props.pName}</h3>
                <Row>
                    <Col xs="6">
                        <p>{this.props.pPrice}</p>
                    </Col>
                    <Col xs="6" className="text-right">
                        <p>{this.props.pSize}</p>
                    </Col>
                    <ProductMdal ref={details => this.details = details} isOpen={this.state.isOpen} productData={this.props.productData} />
                </Row>
                <p></p>
            </div>
        );
    }
}

export default Card;