import React from 'react';
import PropTypes from 'prop-types';
import "./Card.scss" 
const Card = (props) => {
    return (
        <div className="news_card">
            <img src={props.urlToImage}/>
             <h3>{props.title}</h3>
             <p>{props.publishedAt}</p>
            <p></p>
        </div>
    );
}
 
Card.propTypes = {};
 
export default Card;