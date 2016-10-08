import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import apiDataReducer from './reducer_api_data';

const rootReducer = combineReducers({
  apiData: apiDataReducer,
  form: formReducer
});

export default rootReducer;
