import { createStore } from './../utils/simple-redux-store';
import reducer from './reducer';

const store = createStore(reducer);

window.store = store;

export default store