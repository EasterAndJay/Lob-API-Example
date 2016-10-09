import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddressForm from "../components/address_form";

import "../assets/stylesheets/app.scss";
class App extends Component {

  constructor(props) {
    super(props);
  }

  renderResponseErrors() {
    if(this.props.responseError){
      return `${this.props.responseError}`;
    }
  }

  renderLinkToLetter() {
    if (this.props.lobResponse) {
      return <a className="letter"
                href={this.props.lobResponse.data.url}
              >
                Link to your letter
              </a>
    }
  }

  render() {

    return (
      <div>
        <div className="row">
          <h1 className="text-center page-header"> Lob API Example </h1>
          <p className="error">{this.renderResponseErrors()}</p>
          {this.renderLinkToLetter()}
        </div>
        <AddressForm />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    lobResponse: state.apiData.lobResponse,
    responseError: state.apiData.responseError
  };
}

// Connect react component to redux store
export default connect(mapStateToProps, null)(App);