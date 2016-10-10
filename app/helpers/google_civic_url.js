import {GOOGLE_API_URL, GOOGLE_API_KEY} from '../constants/api_info';

// Build a query string corresponding to the given address
export function constructGoogleCivicApiUrl(addressData) {
  const compositeAdress = addressData.join("+").replace(/ /g, "+");
  return `${GOOGLE_API_URL}?address=${compositeAdress}&key=${GOOGLE_API_KEY}`
}