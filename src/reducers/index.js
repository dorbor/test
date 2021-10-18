import counter from './counter'
import isLogged from './isLogged'
import breeds from './breeds'
import {combineReducers} from 'redux'


const allReducers = combineReducers({
    counter,
    isLogged,
    breeds
});

export default allReducers;