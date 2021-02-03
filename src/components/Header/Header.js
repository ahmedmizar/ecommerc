import React, { Component } from "react";
import Slider from "react-slick";
import { Row, Col } from "reactstrap";
import "./Header.scss";
class Header extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            slidesToScroll: 1,
            // autoplay: true,
            // speed: 3000,
            // autoplaySpeed: 5000,
            cssEase: "linear"
        };
        return (
            <header>

                <Slider {...settings} className="header-slider">
                    <div>
                        <div className="sider-container">
                            <div className="container">
                                <Row>
                                    <Col>
                                        <div className="slider-contain">
                                            <img src={require("../../assests/images/slider1.jpg")} />
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="sider-container">
                            <div className="container">
                                <Row>
                                    <Col>
                                        <div className="slider-contain">
                                            <img src={require("../../assests/images/slider2.jpg")} />
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="sider-container">
                            <div className="container">
                                <Row>
                                    <Col>
                                        <div className="slider-contain">

                                            <img src={require("../../assests/images/slider3.jpg")} />

                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>


                </Slider>
            </header>
        );
    }
}
export default Header