import React from 'react';
export const Field = (props) => {
  return(
    <input
      className={`form-control ${props.className}`}
      type="text"
      placeholder={props.label}
      value={props.value}
      onChange={props.onChange}
    />
  );
}