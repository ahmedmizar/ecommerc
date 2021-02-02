import React, { Component } from "react";
import Slider from "react-slick";
import "./Header.scss";
class Header extends Component {
    render() {
        const settings = {
            dots: true,
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

                <Slider {...settings}>
                    <div>
                        <img src={require("../../assests/images/slider4.jpg")} />
                    </div>
                    <div>
                        <img src={require("../../assests/images/slider2.jpg")} />
                    </div>
                    <div>
                        <img src={require("../../assests/images/slider3.jpg")} />
                    </div>

                </Slider>
            </header>
        );
    }
}
export default Header