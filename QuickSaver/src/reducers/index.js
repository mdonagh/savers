import {combineReducers} from 'redux';
import userReducer from './User';

const reducers = combineReducers({
  user: userReducer,
});

export default reducers;
