import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import newsReducer from "./News";




const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    news: newsReducer
  });

export default rootReducer;
