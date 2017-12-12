import React from 'react';
import { Link } from 'react-router';

export default function Campus(props) {
  const campus = props.selectedCampus;
  const students = props.selectedCampusStudents;
  const remove = props.removeOne;

  return (
    <div>
      <div className="centered">
        <h2>{ campus.name }</h2>
         <h4>{`Number of Students: ${students.length}`}</h4>
          <img src={ campus.image } className="campus img-thumbnail" />
        <Link className="btn btn-default campus-edit" to={`/campuses/${campus.id}/edit`}>Edit</Link>
      </div>
       <h2>Students: <Link className="btn btn-success add-student-to-campus" to={`/campuses/${campus.id}/students/add`}>Add A Student</Link></h2>
       <table className="table">
         <thead>
          <tr>
            <th><h3>First Name</h3></th>
            <th><h3>Last Name</h3></th>
          </tr>
        </thead>
        <tbody>
          {students ? students.map(student => (
            <tr key={student.id}>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>
                <Link className="btn btn-info" to={`/students/${student.id}`}>View</Link>
                <button className="btn btn-danger" onClick={() => remove(student, students)}>
                <span>Remove</span></button>
              </td>
            </tr>)) : `No students assigned to ${campus.name} yet.`
          }
        </tbody>
      </table>
    </div>
  );
}
