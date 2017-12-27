import counterReducer, {moduleName as counterModule} from '../ducks/counter'

const combineReducers = (reducers) => {
  return (state={}, action) => {
    return Object.keys(reducers).reduce(  // use reduce function
      (nextState, key) => {
        nextState[key] = reducers[key](
          state[key],
          action,
        );
        return nextState;
      },
      {},  // start with empty object
    );
  };
};




export default combineReducers({
    [counterModule]: counterReducer
})