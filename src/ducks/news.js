import {appName} from './../config';
import {data as defaultData} from './../mocks/news';

/**
 * Constants
 * */
export const moduleName = 'news';
const prefix = `${appName}/${moduleName}`;

export const FETCH_ALL = `${prefix}/FETCH_ALL`;
export const FETCH_ALL_START = `${prefix}/FETCH_ALL_START`;
export const FETCH_ALL_SUCCESS = `${prefix}/FETCH_ALL_SUCCESS`;
export const FETCH_ALL_ERROR = `${prefix}/FETCH_ALL_ERROR`;

/**
 * Reducer
 * */
export default (state = defaultData, action) => {
    const { type, payload } = action;

    switch (type) {
        case FETCH_ALL_SUCCESS:
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
/*export function fetchAll(email, password) {
    return {
        type: FETCH_ALL
    }
}*/

/**
 * Middlewares
 */
export const fetchMiddleware = store => next => action => {
    if (!action.callAPI) return next(action);

    const {callAPI, ...rest} = action;

    next( {...rest, type: FETCH_ALL_START} );

    fetch(callAPI)
        .then((response) => response.json())
        .then((data) => {
            next( {...rest, type: FETCH_ALL_SUCCESS, payload: data} );
        })
        .catch((err) => {
            console.error(err);
            next( {...rest, type: FETCH_ALL_ERROR} );
        });
};