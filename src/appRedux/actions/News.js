import data from "../../data/news.json"
import axios from "axios"
import {
    FETCH_NEWS_REQUEST,
    FETCH_NEWS_SUCCESS,
    FETCH_NEWS_FAILURE
} from "../../constants/NewsTypes";
export const fetchNewsRequest = () => {
    return {
        type: FETCH_NEWS_REQUEST,
    };
};
export const fetchNewsSuccess = (news) => {
    return {
        type: FETCH_NEWS_SUCCESS,
        payload: news,
    };
};
export const fetchNewsFailure = (error) => {
    return {
        type: FETCH_NEWS_FAILURE,
        payload: error,
    };
};
export const fetchNews = () => {
    return (dispatch) => {
        dispatch(fetchNewsRequest());
        fetch("../../data/news.json").then((response) => {
            dispatch(fetchNewsSuccess(response.articles));
            console.log(response)
        });
    };
};
