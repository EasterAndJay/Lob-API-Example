import { combineReducers } from 'redux';
import apiDataReducer from './reducer_api_data';

const rootReducer = combineReducers({
  apiData: apiDataReducer
});

export default rootReducer;
