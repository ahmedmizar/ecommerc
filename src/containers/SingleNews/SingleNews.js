import React, { Component } from 'react';
import { Container } from 'reactstrap';
import moment from "moment";
import "./SingleNews.scss"
class SingleNews extends Component {
    render() {
        console.log(this.props)
        const SingleNews = this.props.location.state
        return (
            <div className="single_news">
                <Container>
                    {SingleNews ?
                    <React.Fragment>
                        <img src={SingleNews.urlToImage} />
                    <h3>{SingleNews.title}</h3>
                    <p className="date">{moment(SingleNews.publishedAt).format('MMM DD/YYYY, h:mm a')}</p>
                    <p className="content">{SingleNews.content}</p>
                    </React.Fragment>:
                   this.props.history.goBack()
                    }
                </Container>
            </div>
        );
    }
}

export default SingleNews;