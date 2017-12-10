import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

//navbar is simply for navigation, it does not receive any props
export default class Navbar extends Component {
  render(){
    console.log('enterning NavBar')
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <NavLink to="/home" className="navbar-brand">Senior Enrichment</NavLink>
          </div>
          <div>
          <ul className="nav navbar-nav navbar-right">
            <li><NavLink to="/campuses">CAMPUSES</NavLink></li>
             <li><Link to="/students">STUDENTS</Link></li>
          </ul>
        </div>
        </div>
      </nav>
    );
  }
}
