import { Row, Col, Button } from 'reactstrap';
import React, { Component } from 'react';
import moment from "moment";
import data from "../../data/news.json";
import Card from '../../components/Card/Card'
import "./AllNews.scss"
class AllNews extends Component {

    state = {
        news: [],
    }

    sortedNews = [];

    componentDidMount() {

        this.sortedNews = data.articles.sort(this.compare);

        let news = this.sortedNews.slice(0, 8);

        this.setState({ news });
    }

    compare = (a, b) => {
        if (a.publishedAt > b.publishedAt) {
            return -1;
        }
        if (a.publishedAt < b.publishedAt) {
            return 1;
        }
        return 0;
    }

    showMore = () => {
        const { news } = this.state;
        
        if (this.sortedNews.length > news.length) {

            news.push(...this.sortedNews.slice(news.length ,news.length + 8))
            this.setState({ news})
        }
   

    }


    render() {
        return (
            <div className="all_news">
                <div className="news_header">
                    <p>Recntly Added</p>
                </div>
                <Row>

                    {this.state.news && this.state.news.map((Item, key) => {
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
                <div className="all_news_footer">
                    <button disabled={this.sortedNews.length == this.state.news.length} onClick={() => { this.showMore() }}>Show More</button>
                </div>
            </div>
        );
    }
}

export default AllNews;