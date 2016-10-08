import axios from 'axios';

export const FETCH_REP_DATA = "FETCH_REP_DATA";

import {LOB_API_KEY} from '../constants/api_info';

import {constructGoogleCivicApiUrl} from '../helpers/google_civic_url';

export function fetchRepresentativeData(addressData) {
  const request = axios.get(constructGoogleCivicApiUrl(addressData));
  return {
    type: FETCH_REP_DATA,
    payload: request
  };
}
