export const createStore = (reducer, enhancer) => {
    let state = {};
    let listeners = [];

    if (typeof enhancer !== 'undefined') {
        if (typeof enhancer !== 'function') {
            throw new Error('Expected the enhancer to be a function.');
        }

        return enhancer(createStore)(reducer);
    }

    if (typeof reducer !== 'function') {
        throw new Error('Expected the reducer to be a function.');
    }

    /**
     * Gets current state
     */
    const getState = () => state;

    /**
     * Dispatches action and calls listeners
     * @param action
     */
    const dispatch = (action) => {
        state = reducer(state, action);
        listeners.forEach(listener => listener());
    };

    /**
     * Subscribes to store (adds to list of listeners)
     * @param listener
     * @returns {function()} - unsubscribe function (removes listener)
     */
    const subscribe = (listener) => {
        listeners.push(listener);
        return () => {
            listeners = listeners.filter(l => l !== listener);
        }
    };

    // When a store is created, an "INIT" action is dispatched so that every
    // reducer returns their initial state. This effectively populates
    // the initial state tree.
    dispatch({}); // dummy dispatch

    return { getState, dispatch, subscribe };

};