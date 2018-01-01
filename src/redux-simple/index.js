import { createStore } from './../utils/simple-redux-store';
import reducer from './reducer';
import applyMiddlewareToStore from './../utils/applyMiddlewareToStore';
import { fetchMiddleware } from './../ducks/news';

const enhancer = applyMiddlewareToStore(fetchMiddleware);

const store = createStore(reducer, enhancer);
window.store = store;

export default store
