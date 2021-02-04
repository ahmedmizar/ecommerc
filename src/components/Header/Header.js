import React, { Component } from "react";
import Slider from "react-slick";

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
            cssEase: "linear"
        };
        return (
            <header>

                <Slider {...settings} className="header-slider">
                    <div>
                        <div className="sider-container">

                            <div className="slider-contain">
                                <img src={require("../../assests/images/slider1.jpg")} />
                            </div>

                        </div>
                    </div>
                    <div>
                        <div className="sider-container">

                            <div className="slider-contain">
                                <img src={require("../../assests/images/slider2.jpg")} />
                            </div>

                        </div>
                    </div>
                    <div>
                        <div className="sider-container">

                            <div className="slider-contain">

                                <img src={require("../../assests/images/slider.jpg")} />

                            </div>

                        </div>
                    </div>


                </Slider>
            </header>
        );
    }
}
export default Header