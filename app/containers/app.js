import React, { Component } from 'react';
import { connect } from 'react-redux';
import { } from '../actions/index';

import "../assets/stylesheets/app.scss";

export default class App extends Component {
  // Initialize and fetch data from rails server
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1> Hello World!</h1>
      </div>
    );
  }

}

// function mapStateToProps(state) {
//   return {

//   };
// }



// Connect react component to redux store
// export default connect(mapStateToProps, {})(App);
