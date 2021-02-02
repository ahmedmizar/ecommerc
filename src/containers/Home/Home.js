import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchNews } from "../../appRedux/actions/News"
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import "./Home.scss"
import moment from "moment";
import data from "../../data/news.json";
import Card from '../../components/Card/Card';
import Slider from "react-slick";
import axios from "axios"
import Header from '../../components/Header/Header';
class Home extends Component {
    compare = (a, b) => {
        if (a.publishedAt > b.publishedAt) {
            return -1;
        }
        if (a.publishedAt < b.publishedAt) {
            return 1;
        }
        return 0;
    }
    componentDidMount() {
        axios.get("http://localhost:3001/categories").then(res => {
            console.log(res)
        })
    }
    render() {
        // onClick={() => this.props.history.push("/singleNews", Item)}
        return (
            <div className="home">
                <Header />
                {/* <header>
                    <img src={require("../../assests/images/header.jpg")} />
                    <div className="header_info">
                        <h3>Match 23</h3>
                        <p>T20 world cup 2020</p>
                    </div>
                    <div className="over_lay"></div>
                </header> */}
                <div className="news">
                    <div className="news_header">
                        <p>Recntly Added</p>
                        <Link to="/allNews">Show all</Link>
                    </div>
                    <Row>
                        {data.articles.sort(this.compare).slice(0, 8).map((Item, key) => {
                            return (
                                <Col sm="12" md="6" xl="3" key={key} onClick={() => this.props.history.push("/singleNews", Item)}>
                                    <Card
                                        title={Item.title} urlToImage={Item.urlToImage}
                                        publishedAt={moment(Item.publishedAt).format('MMM DD/YYYY, h:mm a')}>
                                    </Card>
                                </Col>
                            )
                        })}
                    </Row>
                </div>
            </div>
        );
    }
}

const mapDispachToProps = (dispach) => {
    return {
        fetchNews: () => dispach(fetchNews()),
    };
};
const mapStateToProps = (state) => {
    console.log(state)
    return {
        news: state.news.news || [],

    };
};
export default connect(mapStateToProps, mapDispachToProps)(Home);