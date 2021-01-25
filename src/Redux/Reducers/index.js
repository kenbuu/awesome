import accountReducer from './acoountReducer';
import {combineReducers} from 'redux';
export default combineReducers({
    ...accountReducer
})
 