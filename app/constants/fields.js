export const fields = [
  {name: "name", label: "Name"},
  {name: "addressLine1", label:"Address Line 1"},
  {name: "addressLine2", label:"Address Line 2"},
  {name: "city", label:"City"},
  {name: "state", label:"State"},
  {name: "zip", label:"Zip"}
];

const initialAddressValues = fields.reduce((prev, current) => {
  return {...prev, [current.name]: "" }
}, {});

export const initialAddressFormState = {...initialAddressValues, message: ""}