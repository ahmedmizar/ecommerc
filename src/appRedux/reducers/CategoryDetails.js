import {
	FETCH_CATEGORY_DETAILS_REQUEST,
	FETCH_CATEGORY_DETAILS_SUCCESS,
	FETCH_CATEGORY_DETAILS_FAILURE
} from "../../constants/CategoriesTypes";
const INIT_STATE = {
    loading: true,
    category: [],
    error: ""

}
const categoryDetailsReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case FETCH_CATEGORY_DETAILS_REQUEST: {
            return {
                ...state,
                loading: true
            }

        }
        case FETCH_CATEGORY_DETAILS_SUCCESS: {
            return {

                loading: false,
                category: action.payload,
                error: ""
            }

        }
        case FETCH_CATEGORY_DETAILS_FAILURE: {
            return {

                loading: false,
                category: [],
                error: action.payload
            }

        }
        default: return state

    }
}
export default categoryDetailsReducer;