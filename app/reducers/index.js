import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import DataReducer from './reducer_data';

const rootReducer = combineReducers({
  data: DataReducer,
  form: formReducer
});

export default rootReducer;
