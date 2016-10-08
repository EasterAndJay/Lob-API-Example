import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRepresentativeData } from '../actions/index';

import "../assets/stylesheets/app.scss";
import * as Test from "../constants/test_data.js";
class App extends Component {
  // Initialize and fetch data from rails server
  constructor(props) {
    super(props);
    this.props.fetchRepresentativeData(Test.myHomeAddressData);
  }

  componentWillReceiveProps(props) {
    if (props.repData) {
      const {repData} = props.repData;
      // repData.name
      // const {address} = repData.address[0]
      // address.city
      // address.line1
      // address.line2
      // address.state
      // address.zip
    }
  }

  render() {
    return (
      <div>
        <h1> Hello World!</h1>
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    repData: state.apiData.repData,
    response: state.apiData.response   
  };
}



// Connect react component to redux store
export default connect(mapStateToProps, {fetchRepresentativeData})(App);
