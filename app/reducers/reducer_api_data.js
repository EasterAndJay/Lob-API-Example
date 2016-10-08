import {
  FETCH_REP_DATA,
} from '../actions/index';

const INITIAL_STATE = {
  repData: null,
  response: null
};

export default function(state = INITIAL_STATE, action) { 
  switch(action.type) {
  case FETCH_REP_DATA:
    return {...state, repData: action.payload.data.officials[0], response: action.payload};
  default:
    return state;
  }
}