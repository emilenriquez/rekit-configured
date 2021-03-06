import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import loginReducer from '../features/home/redux/reducer';
import commonReducer from '../features/common/redux/reducer';
import examplesReducer from '../features/examples/redux/reducer';
import signInReducer from '../features/sign-in/redux/reducer';
import dashboardReducer from '../features/dashboard/redux/reducer';
import adminReducer from '../features/admin/redux/reducer';

// NOTE 1: DO NOT CHANGE the 'reducerMap' name and the declaration pattern.
// This is used for Rekit cmds to register new features, remove features, etc.
// NOTE 2: always use the camel case of the feature folder name as the store branch name
// So that it's easy for others to understand it and Rekit could manage theme.

const reducerMap = {
  router: routerReducer,
  login: loginReducer,
  common: commonReducer,
  examples: examplesReducer,
  signIn: signInReducer,
  dashboard: dashboardReducer,
  admin: adminReducer
};

export default combineReducers(reducerMap);
