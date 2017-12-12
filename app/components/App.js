import React, { Component } from 'react';
import NavBar from './Navbar';


export default class App extends Component {
  constructor (props) {
    super(props);
  }
  render() {
  return (
    <div id="main">
      <div className="background">
        <NavBar campuses={this.props.campuses} />
      </div>
    </div>
  );
}
}
