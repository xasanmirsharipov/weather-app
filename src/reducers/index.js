import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import system from './system';

export default combineReducers({
    router: routerReducer,
    system
})