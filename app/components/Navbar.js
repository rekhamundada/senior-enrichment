import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

//navbar is simply for navigation, it does not receive any props
export default class Navbar extends Component {
  render(){
    console.log('enterning NavBar')
    return (
      <nav className="navbar">
        <div >
          <div className>
            <NavLink to="/home" className="heading">Senior Enrichment</NavLink>
          </div>
          <div className="navbar">
          {/* <ul className="nav navbar-nav navbar-right">
            <li><NavLink to="/campuses">CAMPUSES</NavLink></li>
             <li><Link to="/students">STUDENTS</Link></li>
          </ul> */}
          <div class="menu-item">
            <NavLink to="/campuses">CAMPUSES</NavLink>
          </div>
          <div class="menu-item">
          <Link to="/students">STUDENTS</Link>
          </div>
        </div>
        </div>
      </nav>
    );
  }
}
