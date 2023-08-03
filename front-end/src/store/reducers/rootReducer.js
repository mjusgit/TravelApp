import { combineReducers } from 'redux';
import  citiesReducer  from './citiesReducer';

const rootReducer = combineReducers({
  cities: citiesReducer,
  // Add other reducers here if needed
});

export default rootReducer;
