import axios from "axios"
import {
    FETCH_CATEGORIES_REQUEST,
    FETCH_CATEGORIES_SUCCESS,
    FETCH_CATEGORIES_FAILURE
} from "../../constants/CategoriesTypes";
export const fetchCategoriesRequest = () => {
    return {
        type: FETCH_CATEGORIES_REQUEST,
    };
};
export const fethCategoriesSuccess = (categories) => {
    return {
        type: FETCH_CATEGORIES_SUCCESS,
        payload: categories,
    };
};
export const fetchCategoriesFailure = (error) => {
    return {
        type: FETCH_CATEGORIES_FAILURE,
        payload: error,
    };
};
export const fetchCategories = () => {
    return (dispatch) => {
        dispatch(fetchCategoriesRequest());
        axios.get("http://localhost:3001/categories").then((response) => {
            dispatch(fethCategoriesSuccess(response.data));
        });
    };
};
