import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import categoriesReducer from "./Categories";
import categoryDetailsReducer from "./CategoryDetails";




const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    categories: categoriesReducer,
    category: categoryDetailsReducer
  });

export default rootReducer;
