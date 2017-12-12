import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import store from '../store';

import App from './App';
import Campuses from './Campuses';
import Navbar from './Navbar';
import SingleCampus from './SingleCampus';
import Students from './Students';
import Student from './Student';

import HomeContainer from '../containers/HomeContainer';
import NewCampusContainer from '../containers/NewCampusContainer';
import EditCampusContainer from '../containers/EditCampusContainer';
import NewStudentContainer from '../containers/NewStudentContainer';
import EditStudentContainer from '../containers/EditStudentContainer';

import { fetchCampuses, singleCampus } from '../reducers/campus-store';
import { fetchStudents, singleStudent } from '../reducers/student-store';

export class College extends Component {
  componentDidMount () {
    console.log('enterning componentDidMount');
    this.props.getCampuses();
    this.props.getStudents();
  }

  render () {
    return (
      <Router>
        <div>
          <div>
            <Navbar />
          </div>
          <div className="container-fluid">
            <Switch>
              {/* <Route exact path="/" component={App} /> */}
              <Route exact path="/" component={HomeContainer} />
              <Route path="/home" component={HomeContainer} />
              <Route exact path="/campuses" component={Campuses} />
              <Route path="/new-campus" component={NewCampusContainer} />
              <Route path="/campuses/:campusId/edit" component={EditCampusContainer} />
              <Route path="/campuses/:campusId" component={SingleCampus} />
              <Route exact path="/students" component={Students} />
              <Route exact path="/students/:studentId" component={Student} />
              <Route exact path="/students/:studentId/edit" component={EditStudentContainer} />
              <Route path="/newstudent" component={NewStudentContainer} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
// container
const mapStateToProps = state => {
  console.log('entering mapStateToProps for College', state.campuses);
  return {
    campuses: state.campuses,
    students: state.students
  };
};

const mapDispatchToProps = dispatch => {
  console.log('entering mapDispatchToProps for College');
  return {
    getCampuses: function () {
      dispatch(fetchCampuses());
    },
    getStudents: function () {
      dispatch(fetchStudents());
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(College);
