// Set up your root reducer here...
import { combineReducers } from 'redux';
import users from './userReducer';
import schedule from './scheduleReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  users,
  schedule,
  ajaxCallsInProgress
});

export default rootReducer;
