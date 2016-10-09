export function extractUserAddress(addressFormState){
  return Object.keys(addressFormState).map((key) => {
    if(key != 'message' && key != "name") {
      return addressFormState[key];
    }
  });
}

export function extractToAddress(response) {
  const repData = response.data.officials[0];
  const address = repData.address[0];
  return {
    name: repData.name,
    address_line1: address.line1,
    address_line2: address.line2,
    address_city: address.city,
    address_state: address.state,
    address_zip: address.zip,
    address_country: 'US'
  };
}

export function extractFromAddress(addressFormState) {
  return {
    name: addressFormState.name,
    address_line1: addressFormState.addressLine1,
    address_line2: addressFormState.addressLine2,
    address_city: addressFormState.city,
    address_state: addressFormState.state,
    address_zip: addressFormState.zip,
    address_country: 'US'
  };
}