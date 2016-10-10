import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import {
  extractUserAddress,
  extractToAddress,
  extractFromAddress
} from "../helpers/address_helpers";

import { buildLetterHTML } from "../helpers/build_html";
import { fields, initialAddressFormState } from "../constants/fields";

import {
  fetchRepresentativeData,
  postLetterToLob,
  updateResponseError
} from "../actions/index";

import { Field } from "./field";

class AddressForm extends Component {
  constructor(props) {
    super(props);
    this.state = initialAddressFormState;
  }

  // Render form fields using field component
  renderFields() {
    return fields.map((field) => {
      return <Field
        key={field.label}
        label={field.label}
        className="address"
        value={this.state[field.name]}
        onChange={(e) => this.setState({[field.name]: e.target.value})}/>
    });
  }

  // Submit requests sequentially.
  // Uses promise structure on aynschronous action creators to
  // simulate synchronous code.
  onSubmit(e) {
    e.preventDefault();
    const userAddressArray = extractUserAddress(this.state)
    // Get request to Google API
    this.props.fetchRepresentativeData(userAddressArray)
    // Then post request to Lob API with Google response
    .then((response) => {
      //post to lob
      if(response.payload.status < 400){
        // Remove error if one exists from previous request
        this.props.updateResponseError(null);

        const toAddress = extractToAddress(response.payload);
        const fromAddress = extractFromAddress(this.state);
        const html = buildLetterHTML(this.state.message);

        this.props.postLetterToLob(toAddress, fromAddress, html);
      }
      else {
        throw new Error(
          "Google API Error: Check the validity of the entered address."
        );
      }
    })
    .catch((error) => {
      // Handle error from Lob request
      this.props.updateResponseError(error)
    });
  }

  render() {
    return(
      <form onSubmit={(e) => this.onSubmit(e)}
            className="address-fields"
      >
        {this.renderFields()}
        <textarea 
          placeholder="Write a message to your government representative"
          className="message form-control" 
          rows="3"
          value={this.state.message}
          onChange={(e) => this.setState({message: e.target.value})}>
        </textarea>
        <button type="submit" disabled={!this.state.message}>Submit</button>
      </form>
    );
  }
}


export default connect(null, {
  updateResponseError,
  fetchRepresentativeData,
  postLetterToLob
})(AddressForm);