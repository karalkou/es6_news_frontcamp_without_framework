import combineReducers from './../utils/combineReducers';
import newsReducer, {moduleName as newsModule} from './../ducks/news';
import sourcedReducer, {moduleName as sourcedModule} from './../ducks/sources';

export default combineReducers({
    [newsModule]: newsReducer,
    [sourcedModule]: sourcedReducer
})
