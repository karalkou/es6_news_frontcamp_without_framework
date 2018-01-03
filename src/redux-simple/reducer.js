import combineReducers from './../utils/combineReducers';
import counterReducer, {moduleName as counterModule} from './../ducks/counter';
import newsReducer, {moduleName as newsModule} from './../ducks/news';

export default combineReducers({
    [counterModule]: counterReducer,
    [newsModule]: newsReducer,
})
