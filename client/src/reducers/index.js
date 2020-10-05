// Root Reducer
import { combineReducers } from 'redux';
import authReducer from './authReducer';

// Will combine reducers in here
export default combineReducers({
  authReducer: authReducer,
});
