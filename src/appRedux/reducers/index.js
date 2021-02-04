import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { reducer as formReducer } from 'redux-form';
import categoriesReducer from "./Categories";
import categoryDetailsReducer from "./CategoryDetails";




const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    categories: categoriesReducer,
    category: categoryDetailsReducer,
    form: formReducer
  });

export default rootReducer;
