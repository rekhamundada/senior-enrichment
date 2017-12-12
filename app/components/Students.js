
 import React, { Component } from 'react';
 import { NavLink } from 'react-router-dom';
 import { connect } from 'react-redux';
 import { deleteTheStudent } from '../reducers/student-store';

 export class Students extends Component {

   render(){
   return (
    <table className="table">
       <thead>
         <tr>
           <th><h3>FirstName</h3></th>
           <th><h3>LastName</h3></th>
           <th><h3>Campus ID</h3></th>
           <th><h3><span>
             <NavLink className="btn btn-success add-new" to="/newstudent">
               <span className="glyphicon glyphicon-plus" /> New Student
             </NavLink>
             </span></h3></th>
         </tr>
       </thead>
       <tbody className="tbl-content">
         {
           this.props.students && this.props.students.map(student => (
             <tr key={student.id}>
               <td>{ student.firstName }</td>
               <td>{ student.lastName }</td>
               <td>{ student.campusId }</td>
               <td>
                 <NavLink className="btn btn-info" to={`/students/${student.id}`}>View</NavLink>
                 <button className="btn btn-danger" onClick={() => this.props.deleteOne(student.id)}>Delete</button>
               </td>
             </tr>
           ))
         }
       </tbody>
    </table>
  );
}
 }
 const mapStateToProps = (state) => {
  console.log('entering mapStateToProps of StudentsContainer');
  return {
    students: state.students
  };
};

const mapDispatchToProps = (dispatch) => {
  console.log('entering mapDispatchToProps of StudentsContainer' );
  return {
    deleteOne (studentId) {
      dispatch(deleteTheStudent(studentId)); //dispatching the action to delete a student
    }
  };
};

export default connect(mapStateToProps,
  mapDispatchToProps
  )(Students);
