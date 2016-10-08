import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRepresentativeData } from '../actions/index';
import AddressForm from "../components/address_form";

import "../assets/stylesheets/app.scss";
import * as Test from "../constants/test_data";
class App extends Component {
  // Initialize and fetch data from rails server
  constructor(props) {
    super(props);
    // props.fetchRepresentativeData(Test.myHomeAddressData);
    props.fetchRepresentativeData(Test.nonexistentAddressData);
  }

  componentWillReceiveProps(props) {
    if (props.response.data) {
      const {repData} = props.response.data.officials[0];
      const {address} = repData.address[0]
      toAddress = {
        name: repData.name,
        address_line1: address.line1,
        address_line2: address.line2,
        address_city: address.city,
        address_state: address.state,
        address_zip: address.zip,
        address_country: 'US'
      }
    }
  }

  renderResponseError() {
    const {response} = this.props;
    if(response && !response.data){
      return `Error from Google API: ${response}`;
    }
  }

  render() {

    return (
      <div>
        <div className="row">
          <h1 className="text-center page-header"> Lob API Example </h1>
          <p>{this.renderResponseError()}</p>
        </div>
        <AddressForm />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    response: state.apiData.response   
  };
}

// Connect react component to redux store
export default connect(mapStateToProps, {fetchRepresentativeData})(App);
