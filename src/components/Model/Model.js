
import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import "./Model.scss"
const closeBtn = <button className="close" onClick={() => { }}>&times;</button>;

class ProductMdal extends Component {
    state = {
        isOpen: false,
    }

    toggleShow = () => {
        this.setState({ isOpen: !this.state.isOpen })
    }

    render() {
        let { productData } = this.props

        return (
            <div>
                <Modal centered isOpen={this.state.isOpen} toggle={this.toggleShow}>
                    <ModalBody>
                        <div className="product__details">
                            <h3>{productData && productData.pName}</h3>
                            <p>{productData && productData.pCategory}</p>
                            <div className="product__details--size">
                                <p> <span>Size:</span> {productData && productData.pSize} </p>
                                <p> <span>Price:</span> {productData && productData.pPrice} </p>
                            </div>
                        </div>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default ProductMdal;