export default class CreateStore {
    constructor(reducer, enhancer){
        // to implement Singleton design pattern
        if (typeof CreateStore.instance === 'object') {
            return CreateStore.instance;
        }

        /*---- Ordinary common logic ----*/
        this.reducer = reducer;
        this.enhancer = enhancer;

        this.state = {};
        this.listeners = [];

        if (typeof enhancer !== 'undefined') {
            if (typeof enhancer !== 'function') {
                throw new Error('Expected the enhancer to be a function.');
            }

            return enhancer(CreateStore)(reducer);
        }

        if (typeof reducer !== 'function') {
            throw new Error('Expected the reducer to be a function.');
        }

        this.dispatch({}); // dummy dispatch
        /*---- \Ordinary common logic ----*/

        /* to implement Singleton design pattern */
        CreateStore.instance = this;
    }

    /**
     * Gets current state
     */
    getState = () => this.state;

    /**
     * Dispatches action and calls listeners
     * @param action
     */
    dispatch = (action) => {
        console.log('prev state: ', this.state);
        console.log('action: ', action);
        this.state = this.reducer(this.state, action);
        console.log('next state: ', this.state);
        this.listeners.forEach(listener => listener());
    };

    /**
     * Subscribes to store (adds to list of listeners)
     * @param listener
     * @returns {function()} - unsubscribe function (removes listener)
     */
    subscribe = (listener) => {
        this.listeners.push(listener);
        return () => {
            this.listeners = this.listeners.filter(l => l !== listener);
        }
    };

};
