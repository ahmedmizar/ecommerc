import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchCategories } from "../../appRedux/actions/Categories"
import { Link } from 'react-router-dom';
import "./Home.scss"
import Card from '../../components/Card/Card';
import Slider from "react-slick";
import Header from '../../components/Header/Header';
import ProductMdal from '../../components/Model/Model';


class Home extends Component {
    state = {
        openModal: false,
        productData: null,
    }

    componentDidMount() {
        this.props.fetchCategories()
    }

    handelProductCard = (product) => {
        this.setState({ openModal: true, productData: product })
    }

    render() {
        const { categories, loading } = this.props;
        var settings = {
            dots: false,
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


        return (
            <div className="home">
                <Header />

                <div className="categories">

                    <div className="container">
                        {categories && categories.map(category => {
                            return (
                                <div className="category-contianer" key={category.id}>
                                    <div className="ctegory-header">

                                        <h3>{category.categoryTitle}</h3>
                                        <Link to={`${this.props.match.url}category/${category.id}`} className="show-all">Show All</Link>
                                    </div>
                                    <Slider {...settings} className="products">
                                        {category.products && category.products.map(product => {
                                            return (
                                                <div
                                                    onClick={() => this.handelProductCard(product)}
                                                    key={product.pId}>

                                                    <Card
                                                        pName={product.pName}
                                                        urlToImage={require("../../assests/images/product1.jpg")}
                                                        pPrice={product.pPrice}
                                                        pSize={product.pSize}
                                                        productData={product}
                                                    >
                                                    </Card>

                                                </div>
                                            )
                                        })}

                                    </Slider>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <ProductMdal isOpen={this.state.openModal} productData={this.state.productData} />
            </div>
        );
    }
}

const mapDispachToProps = (dispach) => {
    return {
        fetchCategories: () => dispach(fetchCategories()),
    };
};
const mapStateToProps = (state) => {
    console.log(state)
    return {
        categories: state.categories.categories || [],
        loading: state.categories.loading

    };
};
export default connect(mapStateToProps, mapDispachToProps)(Home);