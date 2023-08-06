import { combineReducers } from 'redux';
import  authReducer from './authReducer';
import  citiesReducer  from './citiesReducer';

const rootReducer = combineReducers({
  cities: citiesReducer,
  auth: authReducer,
});

export default rootReducer;
