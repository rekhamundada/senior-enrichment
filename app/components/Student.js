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
      <div className='centered'>
        <h2>Student Details: </h2>
      </div>
      <table className='table'>
        <tbody>
          <tr>
            <td>First Name:</td><td>{student.firstName}</td>
          </tr>
          <tr>
            <td>Last Name:</td><td>{student.lastName}</td>
          </tr>
          <tr>
            <td>Email:</td><td>{student.email}</td>
          </tr>
          <tr>
            <td>Campus:</td>
            <td>
              <NavLink to={`/campuses/${student.campusId}`}>
                <td>{student.campusId ? student.campusId : 'None'}</td>
              </NavLink>
            </td>
          </tr>
        </tbody>
      </table>
      <NavLink className='btn btn-default' to={`/students/${student.id}/edit`}>Edit</NavLink>
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
