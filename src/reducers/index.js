import { combineReducers } from 'redux';
import counterReducer from './counter';

//* COMBINE MULTIPLE REDUCERS ....
const allReducers = combineReducers({
    counter: counterReducer
})

export default allReducers