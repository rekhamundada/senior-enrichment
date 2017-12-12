import React, { Component } from 'react';
import StudentForm from '../components/StudentForm';
import { updateTheStudent } from '../reducers/student-store';
import { connect } from 'react-redux';

class EditStudentContainer extends Component {
  constructor (props) {
    console.log('EditStudentContainer', props);
    super(props);
    this.state = {
      id: props.student.id,
      firstName: props.student.firstName,
      lastName: props.student.lastName,
      email: props.student.email,
      gpa: props.student.gpa,
      campusId: props.student.campusId,
      dirty: false
    };
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleCampusChange = this.handleCampusChange.bind(this);
    this.handleGpaChange = this.handleGpaChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFirstNameChange (evt) {
    evt.preventDefault();
    let firstNameValue = evt.target.value;
    this.setState({
      firstName: firstNameValue,
      dirty: true
    });
  }

  handleLastNameChange (evt) {
    evt.preventDefault();
    let lastNameValue = evt.target.value;
    this.setState({
      lastName: lastNameValue,
      dirty: true
    });
  }

  handleEmailChange (evt) {
    evt.preventDefault();
    let emailValue = evt.target.value;
    this.setState({
      email: emailValue,
      dirty: true
    });
  }

  handleGpaChange (evt) {
    evt.preventDefault();
    let gpaValue = evt.target.value;
    this.setState({
      gpa: gpaValue,
      dirty: true
    });
  }

  handleCampusChange (evt) {
    evt.preventDefault();
    let campusValue = evt.target.value;
    this.setState({
      campusId: campusValue
    });
  }

  handleSubmit (e) {
    console.log('enterning handle submit');
    e.preventDefault();
    console.log('enterning firstName submit', e.target.firstName.value);
    console.log('enterning lastName submit', e.target.lastName.value);
    console.log('enterning gpa submit', e.target.gpa.value);
    console.log('enterning email submit', e.target.email.value);
    console.log('enterning campus submit', e.target.campus.value);
    const student = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      gpa: e.target.gpa.value,
      email: e.target.email.value,
      campusId: e.target.campus.value
    };
    this.props.editOne(this.state.id, student);
  }

  render () {
    let firstName = this.state.firstName;
    let lastName = this.state.lastName;
    let email = this.state.email;
    let gpa = this.gpa;
    let campuses = this.props.campuses;
    let campusId = this.state.campusId;
    const dirty = this.state.dirty;
    let warning = '';

    if (!firstName && !lastName && !email && dirty) {
      warning = 'You must enter details for a student';
    }

    return (
      <StudentForm
        handleFirstNameChange={this.handleFirstNameChange}
        handleLastNameChange={this.handleLastNameChange}
        handleEmailChange={this.handleEmailChange}
        handleGpaChange={this.handleGpaChange}
        handleCampusChange={this.handleCampusChange}
        handleSubmit={this.handleSubmit}
        firstName={firstName}
        lastName={lastName}
        email={email}
        gpa={gpa}
        campusId={campusId}
        campuses={campuses}
        warning={warning}
        formTitle= "Edit Student"
            />
    );
  }
}

const mapStateToProps = function (state, ownProps) {
  const studentId = ownProps.match.params.studentId;
  return {
    campuses: state.campuses,
    student: state.students.find(student => student.id === +studentId)
  };
};

const mapDispatchToProps = function (dispatch, ownProps) {
    const studentId = ownProps.match.params.studentId;
  return {
    editOne (studentId, student) {
      dispatch(updateTheStudent(studentId, student));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditStudentContainer);
