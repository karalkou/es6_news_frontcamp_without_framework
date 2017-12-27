import {appName} from './../config'

/**
 * Constants
 * */
export const moduleName = 'counter';
const prefix = `${appName}/${moduleName}`;

export const INCREMENT = `${prefix}/INCREMENT`;
export const DECREMENT = `${prefix}/DECREMENT`;

/**
 * Reducer
 * */
export default function counter(state = 0, action) {
    switch (action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        default:
            return state;
    }
}

/**
 * Action Creators
 * */
export function incrementCounter(email, password) {
    return {
        type: INCREMENT
    }
}

export function decrementCounter(email, password) {
    return {
        type: DECREMENT
    }
}