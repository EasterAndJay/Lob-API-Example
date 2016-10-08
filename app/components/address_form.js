import React, {Component} from 'react';
import {Field} from "./field";
import {fields} from "../constants/fields";

export default class AddressForm extends Component {
  constructor(props) {
    super(props);
    const initialAddressValues = fields.reduce((prev, current) => {
      return {...prev, [current.name]: "" }
    }, {});
    this.state = {...initialAddressValues, message: ""};
  }

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

  onSubmit(e) {
    e.preventDefault();
    console.log("Submitted");
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
        <button type="submit">Submit</button>
      </form>
    );
  }
}