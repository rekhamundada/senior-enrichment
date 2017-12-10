import React, { Component } from 'react';

//import navbaar component
import NavBar from './Navbar';
//import actions and action creators

export default class App extends Component {
  constructor (props) {
    super(props);
  }
  render() {
    console.log('entering app');
  return (
    <div id="main">
      <div className="background">
        <NavBar campuses={this.props.campuses} />
      </div>
      {/* <div>
        { children }
      </div> */}
    </div>
  );
}
}
