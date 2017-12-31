import compose from './compose';

export default function applyMiddlewareToStore(...middlewares) {
    return (createStore) =>
        (reducer, initialState) => {
            let store = createStore(reducer, initialState);
            let dispatch = store.dispatch;
            let chain = [];
            let middlewareAPI = {
                getState: store.getState,
                dispatch: (action) => dispatch(action)
            };

            chain = middlewares.map(middleware => middleware(middlewareAPI));

            dispatch = compose(...chain, store.dispatch);

            return {
                ...store,
                dispatch
            };
        };
}