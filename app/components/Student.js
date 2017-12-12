import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateTheStudent } from '../reducers/student-store';

export function Student (props) {
  const studentId = +props.studentId
  const student = props.students.find(student => student.id === studentId);
  console.log('student', student);

  return (
    <div>
      <div className="heading">
          <h2>Student Details</h2>
      </div>
      <div className="row">
          <div className="col-xs-2">
          <NavLink className='btn btn-default' to={`/students/${student.id}/edit`}>Edit Student</NavLink>
          </div>
          </div>

      <table cellPadding="0" cellSpacing="0">
        <thead>
              <tr>
                <th>First Name </th>
                <th>Last Name </th>
                <th>Student GPA</th>
                <th>Student Email</th>
                <th>Campus ID</th>
              </tr>
        </thead>
        <tbody className="tbl-content">
          <tr>
            <td>{student.firstName}</td>
            <td>{student.lastName}</td>
            <td>{student.gpa}</td>
            <td>{student.email}</td>
            <td>
              <NavLink to={`/campuses/${student.campusId}`}>
                <td>{student.campusId ? student.campusId : 'None'}</td>
              </NavLink>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
const mapStateToProps = function (state, ownProps) {
  return {
    studentId: ownProps.match.params.studentId,
    campuses: state.campuses,
    students: state.students
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    // const campusId = ownProps.match.params.studentId;
  return {
    handleClick (e) {
      e.preventDefault();
      const studentId = e.target.value;
      const student1 = ownProps.students.find(student => student.id === studentId)
      dispatch(updateTheStudent(studentId, student1))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Student);
