import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'

import {applyMiddleware, createStore} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk';
import logger  from "redux-logger"
import rootReducer from '../reducers'
export const history = createBrowserHistory()





const store= createStore(rootReducer(history), composeWithDevTools(applyMiddleware(routerMiddleware(history),thunk, logger)))
export default store