import React, { Component } from 'react'
import { connect } from 'react-redux';

class Header extends Component {

  constructor(props) {
    super(props);
  }

  // If errors exist, render inside header
  renderResponseErrors() {
    if(this.props.responseError){
      return `${this.props.responseError}`;
    }
  }

  render(){
    return(
      <header className="row">
        <h1 className="text-center page-header"> Lob API Example </h1>
        <p className="error">{this.renderResponseErrors()}</p>
      </header>
    );
  }
}

function mapStateToProps(state) {
  return {
    responseError: state.apiData.responseError
  };
}

export default connect(mapStateToProps, null)(Header);