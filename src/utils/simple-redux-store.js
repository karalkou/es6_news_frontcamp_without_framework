export const createStore = (reducer) => {
    let state;
    let listeners = [];

    const getState = () => state;

    const dispatch = (action) => {
        console.log('action: ', action);
        console.log('reducer: ', reducer);
        console.log('state before: ', state);
        state = reducer(state, action);
        console.log('state after: ', state);
        listeners.forEach(listener => listener());
    };

    const subscribe = (listener) => {
        listeners.push(listener);
        return () => {
            listeners = listeners.filter(l => l !== listener);
        }
    };

    dispatch({}); // dummy dispatch

    return { getState, dispatch, subscribe };

};