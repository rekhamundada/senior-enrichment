import React from 'react';

export default function StudentForm (props) {
  const handleFirstNameChange = props.handleFirstNameChange;
  const handleLastNameChange = props.handleLastNameChange;
  const handleEmailChange = props.handleEmailChange;
  const handleCampusChange = props.handleCampusChange;
  const handleGpaChange = props.handleGpaChange;

  const handleSubmit = props.handleSubmit;
  const firstName = props.firstName;
  const lastName = props.lastName;
  const email = props.email;
  const campusId = props.campusId;
  const campuses = props.campuses;
  const warning = props.warning;
  const formTitle = props.formTitle;
  const gpa = props.gpa;
  console.log('campuses', props.campuses);

  return (
    <div>
      <form className="form-horizontal" onSubmit={handleSubmit}>
        <fieldset>
          <legend>{ formTitle }</legend>
          { warning && <div className="alert alert-warning">{warning}</div> }
          <div className="form-group">
            <label className="col-xs-2 control-label">First Name</label>
            <div className="col-xs-10">
              <input
                className="form-control"
                name="firstName"
                placeholder="First Name"
                type="text"
                onChange={handleFirstNameChange}
                value={firstName}
              />
            </div>
          </div>
          <div className="form-group">
            <label className="col-xs-2 control-label">Last Name</label>
            <div className="col-xs-10">
              <input
                className="form-control"
                name="lastName"
                placeholder="Last Name"
                type="text"
                onChange={handleLastNameChange}
                value={lastName}
              />
            </div>
          </div>
          <div className="form-group">
            <label className="col-xs-2 control-label">Email</label>
            <div className="col-xs-10">
              <input
                className="form-control"
                name="email"
                placeholder="e.g. email@address.com"
                type="text"
                onChange={handleEmailChange}
                value={email}
              />
            </div>
          </div>
          <div className="form-group">
            <label className="col-xs-2 control-label">Gpa</label>
            <div className="col-xs-10">
              <input
                className="form-control"
                name="gpa"
                placeholder="e.g. 3.5"
                type="number" step="any"
                onChange={handleGpaChange}
                value={gpa}
              />
            </div>
        </div>
          <div className="form-group">
          <label className="col-xs-2 control-label">Campus</label>
          <div className="col-xs-10">
            <select
              className="form-control"
              name="campus"
              value={campusId}
              onChange={handleCampusChange}>
              <option key="0" value=" ">None</option>
              {
                campuses && campuses.map(campus => (
                  <option key={campus.id} value={campus.id} >{campus.name}</option>
                ))
              }
            </select>
          </div>
        </div>

        <div className="form-group">
            <div className="col-xs-10 col-xs-offset-2">
              <button
                type="submit"
                className="btn btn-success"
                disabled={!!warning || !firstName && !lastName}>Save</button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
}
