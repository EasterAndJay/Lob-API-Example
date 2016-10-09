import {
  FETCH_REP_DATA,
  POST_LOB_LETTER,
  UPDATE_RESPONSE_ERROR
} from '../actions/index';

const INITIAL_STATE = {
  googleResponse: null,
  lobResponse: null,
  responseError: null
};

export default function(state = INITIAL_STATE, action) { 
  switch(action.type) {
  case FETCH_REP_DATA:
    return {...state, googleResponse: action.payload};
  case POST_LOB_LETTER:
    if(action.payload.data) {
      return {...state, lobResponse: action.payload};
    } else {
      return{...state, responseError: `From Lob API --> ${action.payload}`};
    }
  case UPDATE_RESPONSE_ERROR:
    return {...state, responseError: action.payload};
  default:
    return state;
  }
}