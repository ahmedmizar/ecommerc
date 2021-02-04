
import axios from "axios"
import {
	FETCH_CATEGORY_DETAILS_REQUEST,
	FETCH_CATEGORY_DETAILS_SUCCESS,
	FETCH_CATEGORY_DETAILS_FAILURE
} from "../../constants/CategoriesTypes";
export const fetchCategoryDetailsRequest = () => {
	return {
		type: FETCH_CATEGORY_DETAILS_REQUEST,
	};
};
export const fethCategoryDetailsSuccess = (category) => {
	return {
		type: FETCH_CATEGORY_DETAILS_SUCCESS,
		payload: category,
	};
};
export const fetchCategoryDetailsFailure = (error) => {
	return {
		type: FETCH_CATEGORY_DETAILS_FAILURE,
		payload: error,
	};
};
export const fetchCategory = (id) => {
	return async (dispatch) => {
		dispatch(fetchCategoryDetailsRequest());
		await axios.get(`http://localhost:3001/categories/${id}`).then((response) => {
			dispatch(fethCategoryDetailsSuccess(response.data));
		});
	};
};
