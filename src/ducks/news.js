import {appName, defaultSource, apiKey} from './../config';
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
export function fetchAll(source) {
    return {
        type: FETCH_ALL,
        callAPI: true,
        payload: source
    }
}

/**
 * Middlewares
 */
export const fetchMiddleware = store => next => action => {
    if (!action.callAPI) return next(action);

    const {callAPI, payload, ...rest} = action;

    next( {...rest, type: FETCH_ALL_START} );

    const buildUrl = (source = defaultSource) => {
        if ( source && source.length > 0 ) {
            return `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`
        }
    };

    fetch(buildUrl(payload))
        .then((response) => response.json())
        .then((data) => {
            next( {...rest, type: FETCH_ALL_SUCCESS, payload: data} );
        })
        .catch((err) => {
            console.error(err);
            next( {...rest, type: FETCH_ALL_ERROR} );
        });
};