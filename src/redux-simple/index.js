import { createStore } from './../utils/simple-redux-store';
import reducer from './reducer';
import applyMiddlewareToStore from './../utils/applyMiddlewareToStore';
import logger from 'redux-logger';
import { fetchMiddleware } from './../ducks/news';

const enhancer = applyMiddlewareToStore(logger, fetchMiddleware());

const store = createStore(reducer, enhancer);
window.store = store;

export default store
