import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchCategory } from "../../appRedux/actions/CategoryDetails"
import { Container } from 'reactstrap';
import Card from '../../components/Card/Card';
import "./Category.scss"
class Category extends Component {
    state = {
        products: [],
        showProducts: [],
        model: false
    }
    toggleModel = () => {
        this.setState({ model: !this.state.model })
    }
    async componentDidMount() {
        await this.props.fetchCategory(this.props.match.params.id)

        let productsList = this.props.category && this.props.category.products;
        let showProducts = productsList.slice(0, 6)
        this.setState({ showProducts, products: productsList })

        window.addEventListener('scroll', this.loadMore, true);

    }

    showMore = () => {
        const { products, showProducts } = this.state;

        if (products.length > showProducts.length) {

            showProducts.push(...this.products.slice(showProducts.length, showProducts.length + 6))
            this.setState({ showProducts })
        }

    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.loadMore);
    }

    loadMore = () => {

        if (window.innerHeight + document.documentElement.scrollTop === document.scrollingElement.scrollHeight) {

            if (this.state.products.length > this.state.showProducts.length) {

                this.state.showProducts.push(...this.state.products.slice(this.state.showProducts.length, this.state.showProducts.length + 6))
                this.setState({ showProducts: this.state.showProducts })
            }
        }
    }

    render() {
        const { category, loading } = this.props;
        const { products, showProducts } = this.state;


        return (
            <div className="category">
                <div className="category-header">
                    <img src={require("../../assests/images/baner.jpg")} />
                </div>
                <Container>

                    <div className="products-container">

                        {showProducts && showProducts.map(product => {
                            return (
                                <div key={product.pId} className="product">
                                    <Card
                                        pName={product.pName} urlToImage={require("../../assests/images/product1.jpg")}
                                        pPrice={product.pPrice}
                                        productData={product}
                                        pSize={product.pSize}>
                                    </Card>

                                </div>
                            )
                        })}


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
