import {combineReducers} from 'redux';
import {detailReducer} from './detailReducer';


export default combineReducers({
	contacts: detailReducer,
});