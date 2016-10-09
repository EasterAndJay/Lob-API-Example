import axios from 'axios';

export const FETCH_REP_DATA = "FETCH_REP_DATA";
export const POST_LOB_LETTER = "POST_LOB_LETTER";
export const UPDATE_RESPONSE_ERROR = "UPDATE_RESPONSE_ERROR";

import {LOB_API_KEY, LOB_LETTERS_ENDPOINT} from '../constants/api_info';

import {constructGoogleCivicApiUrl} from '../helpers/google_civic_url';

export function fetchRepresentativeData(addressData) {
  const request = axios.get(constructGoogleCivicApiUrl(addressData));
  return {
    type: FETCH_REP_DATA,
    payload: request
  };
}

export function postLetterToLob(toAddress, fromAddress, html) {
  const request = axios({
    method:'post',
    url: LOB_LETTERS_ENDPOINT,
    auth: {
      username: `${LOB_API_KEY}:`
    },
    data: {
      to: toAddress,
      from: fromAddress,
      color: false,
      file: html
    }
  });
  return {
    type: POST_LOB_LETTER,
    payload: request
  };
}

export function updateResponseError(error) {
  return {
    type: UPDATE_RESPONSE_ERROR,
    payload: error
  };
}
