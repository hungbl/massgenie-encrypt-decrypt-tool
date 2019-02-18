import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import ReducerED from './reducer-ed';

const rootReducer = combineReducers({
    routing: routerReducer,
    reducerED: ReducerED
});

export default rootReducer;