import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchCategory } from "../../appRedux/actions/CategoryDetails"
import { Container } from 'reactstrap';
import Card from '../../components/Card/Card';
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import "./Category.scss"
class Category extends Component {
    componentDidMount() {
        this.props.fetchCategory(this.props.match.params.id)
    }
    render() {
        const { category, loading } = this.props;
        console.log(this.props.match.params.id)
        var settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        console.log(this.props)
        const SingleNews = this.props.location.state
        return (
            <div className="category">
                <Container>
                    <div className="category-header">

                    </div>
                    <div className="category-product">
                        <Slider {...settings} className="products">
                            {category.products && category.products.map(product => {
                                return (
                                    <div key={product.pId}>

                                        <Card
                                            pName={product.pName} urlToImage={require("../../assests/images/product1.jpg")}
                                            pPrice={product.pPrice}
                                            pSize={product.pSize}>
                                        </Card>

                                    </div>
                                )
                            })}

                        </Slider>
                    </div>
                </Container>
            </div>
        );
    }
}


const mapDispachToProps = (dispach) => {
    return {
        fetchCategory: (id) => dispach(fetchCategory(id)),
    };
};
const mapStateToProps = (state) => {
    console.log(state)
    return {
        category: state.category.category || [],
        loading: state.category.loading

    };
};
export default connect(mapStateToProps, mapDispachToProps)(Category);
