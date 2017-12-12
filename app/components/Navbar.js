import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

//navbar is simply for navigation, it does not receive any props
export default class Navbar extends Component {
  render(){

    return (
      <nav className="navbar">
        <div >
          <div className>
            <NavLink to="/home" className="heading">Senior Enrichment</NavLink>
          </div>
          <div className="navbar">
          <div className="menu-item">
            <NavLink to="/campuses">CAMPUSES</NavLink>
          </div>
          <div className="menu-item">
          <Link to="/students">STUDENTS</Link>
          </div>
        </div>
        </div>
      </nav>
    );
  }
}
