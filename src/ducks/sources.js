import {appName, defaultSource} from './../config';

/**
 * Constants
 * */
export const moduleName = 'sources';
const prefix = `${appName}/${moduleName}`;

export const CHANGE_TITLE = `${prefix}/CHANGE_TITLE`;

/**
 * Reducer
 * */
let defaultState = {
    currentTitle: defaultSource
};

export default (state = defaultState, action) => {
    const { type, payload } = action;

    switch (type) {
        case CHANGE_TITLE:
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
export function changeTitle(source) {
    return {
        type: CHANGE_TITLE,
        payload: {
            currentTitle: source
        }
    }
}

/**
 * Middlewares
 */
