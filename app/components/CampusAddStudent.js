import React from 'react';

export default function CampusAddStudent (props) {
  const campus = props.campus;
  const students = props.students;
  const studentId = props.studentId;
  const handleStudentChange = props.handleStudentChange;
  const handleSubmit = props.handleSubmit;

  return (
    <div>
      <h1>Add student to {campus.name}</h1>
      <form className="form-horizontal" onSubmit={handleSubmit}>
        <fieldset>
          <legend>Add Student</legend>
            <div className="form-group">
              <label className="col-xs-2 control-label">Students:</label>
              <div className="col-xs-10">
                <select
                  className="form-control"
                  name="student"
                  value={studentId}
                  onChange={handleStudentChange}>
                  <option key={studentId} value="">Select a student</option>
                  {
                    students && students.map(student => (
                      <option key={student.id} value={student.id} >{student.firstName} {student.lastName}</option>
                    ))
                  }
              </select>
            </div>
          </div>
          <div className="form-group">
            <div className="col-xs-10 col-xs-offset-2">
              <button type="submit" className="btn btn-success">Add Student</button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
}
