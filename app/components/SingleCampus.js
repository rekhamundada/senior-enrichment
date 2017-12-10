'use strict';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {deleteStudent} from '../store';
import {withRouter, NavLink} from 'react-router-dom';

function SingleCampus(props) {
  const campusId = +props.campusId;
  const students = props.students.filter(student => student.campusId === campusId);
  const campus =  props.campuses.find(campus => campus.id === campusId);


    if(campus){
      campus.students = students;

      return (
        <div>
          <div className="heading">
            <h2>{campus.name}</h2>
          </div>
          <div className="row">
            <div className="col-xs-2"><NavLink to={`/editcampus/${campus.id}`}><button className="btn btn-primary"> EDIT CAMPUS</button></NavLink></div>
            <div className="col-xs-2"><NavLink to="/newstudent"><button className="btn btn-primary">CREATE NEW STUDENT</button></NavLink></div>
          </div>

          <div className="tbl-header">
          <table cellPadding="0" cellSpacing="0">
            <thead>
              <tr>
                <th>#</th>
                <th>Student Name </th>
                <th>Student GPA</th>
                <th>Student Gender</th>
                <th>Student Email</th>
              </tr>
              </thead>
            <tbody className="tbl-content">
                {
                campus.students.map((student, index) => {
                  return <tr key={index}>
                    <td>{index + 1}</td>
                    <td><NavLink to={`/students/${student.id}`}>{student.firstName + ' ' + student.lastName}</NavLink></td>
                    <td>{student.gpa}</td>
                    <td>{student.gender}</td>
                    <td>{student.email}</td>
                    <td><button value={student.id} onClick={props.handleClick} className="btn btn-danger">DELETE STUDENT </button></td>
                  </tr>
                })
              }
            </tbody>
          </table>
          </div>
        </div>
      )
    }
    else{
      return <div></div>
    }
  }

const mapStateToProps = function(state, ownProps){
  return{
        campusId: ownProps.match.params.campusId,
        campuses: state.campuses,
        students: state.students
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const campusId = ownProps.match.params.campusId;
  return {
    handleClick(e) {
      const studentId = e.target.value;
      dispatch(deleteStudent(studentId));
    }
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps )(SingleCampus));
