import combineReducers from './../utils/combineReducers';
import counterReducer, {moduleName as counterModule} from './../ducks/counter';
import newsReducer, {moduleName as newsModule} from './../ducks/news';
import sourcedReducer, {moduleName as sourcedModule} from './../ducks/sources';
import { defaultSource } from './../config';

export default combineReducers({
    [counterModule]: counterReducer,
    [newsModule]: newsReducer,
    [sourcedModule]: sourcedReducer
})
