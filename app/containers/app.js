import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddressForm from "../components/address_form";
import Header from "./header";
import {updateResponseError} from "../actions/index";

import "../assets/stylesheets/app.scss";
class App extends Component {

  constructor(props) {
    super(props);
  }

  renderLinkToLetter() {
    if (this.props.lobResponse && this.props.lobResponse.data) {
      return(
        <a
          className="letter"
          href={this.props.lobResponse.data.url}
        >
          Link to your letter
        </a>
      );
    }
  }

  render() {
    return (
      <div>
        <Header />
        {this.renderLinkToLetter()}
        <AddressForm />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    lobResponse: state.apiData.lobResponse,
  };
}

// Connect react component to redux store
export default connect(mapStateToProps, null)(App);