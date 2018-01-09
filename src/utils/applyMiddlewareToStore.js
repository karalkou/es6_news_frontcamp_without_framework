import compose from './compose';

export default function applyMiddlewareToStore(...middlewares) {
    return (CreateStore) =>
        (reducer, initialState) => {
            let store = new CreateStore(reducer, initialState);
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
