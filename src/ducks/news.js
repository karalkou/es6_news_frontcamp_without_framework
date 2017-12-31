import {appName} from './../config';
import {data as defaultData} from './../mocks/news';

/**
 * Constants
 * */
export const moduleName = 'news';
const prefix = `${appName}/${moduleName}`;

export const FETCH_ALL = `${prefix}/FETCH_ALL`;

/**
 * Reducer
 * */
export default (state = defaultData, action) => {
    const { type, payload } = action;

    switch (action.type) {
        case FETCH_ALL:
            return {
                ...state,
                ...payload
            };
        default:
            return state;
    }
}

/**
 * Action Creators
 * */
export function fetchAll(email, password) {
    return {
        type: FETCH_ALL
    }
}

/**
 * Middlewares
 */
export const fetchMiddleware = () => store => next => action => {
    console.log('store', store);
    console.log('next', next);
    console.log('action', action);
    let result = next(action);
    console.log('next state', store.getState());
    return result
};