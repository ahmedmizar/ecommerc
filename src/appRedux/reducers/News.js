import {
    FETCH_NEWS_REQUEST,
    FETCH_NEWS_SUCCESS,
    FETCH_NEWS_FAILURE
} from "../../constants/NewsTypes";
  const INIT_STATE = {
    loader:true,
    news: [],
    error: ""

  }
  const newsReducer = (state= INIT_STATE, action) => {
      switch (action.type) {
          case FETCH_NEWS_REQUEST: {
              return {
                  ...state,
                  loader: true
              }

          }
          case FETCH_NEWS_SUCCESS: {
            return {
                
                loader: false,
                news: action.payload,
                error: ""
            }

        }
        case FETCH_NEWS_FAILURE: {
            return {
                
                loader: false,
                news: [],
                error: action.payload
            }

        }
          default: return state
          
      }
  }
  export default newsReducer;