import compose from './compose';

export default function applyMiddlewareToStore(...middlewares) {
    return (next) =>
        (reducer, initialState) => {
            let store = next(reducer, initialState);
            let dispatch = store.dispatch;
            let chain = [];
            let middlewareAPI = {
                getState: store.getState,
                dispatch: (action) => dispatch(action)
            };
            chain = middlewares.map(middleware =>
                middleware(middlewareAPI));
            dispatch = compose(...chain, store.dispatch);
            return {
                ...store,
                dispatch
            };
        };
}