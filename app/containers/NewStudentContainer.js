import React, { Component } from 'react';
import StudentForm from '../components/StudentForm';
import { makeNewStudent } from '../reducers/student-store';
import { connect } from 'react-redux';



class NewStudentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      gpa: '',
      campusId: '',
      dirty: false
    };

    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleCampusChange = this.handleCampusChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  //  this.handleChange = this.handleChange.bind(this)
    this.handleGpaChange = this.handleGpaChange.bind(this);
  }
  // handleChange(evt){
  //   const newState = {}
  //   newState[evt.target.name] = evt.target.value;
  //   this.setState(newState);
  // }
  handleFirstNameChange (evt) {
    evt.preventDefault();
    let firstNameValue = evt.target.value;
    this.setState({
      firstName: firstNameValue,
      dirty: true
    });
  }
  handleGpaChange (evt) {
    evt.preventDefault();
    let gpa = evt.target.value;
    this.setState({
      gpa: gpa,
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

  handleCampusChange (evt) {
    evt.preventDefault();
    let campusValue = evt.target.value;
    this.setState({
      campusId: campusValue
    });
  }

  handleSubmit (evt) {
    console.log('in handleSubmit', this.state.firstName);
    evt.preventDefault(); //preventing bubling up
    this.props.addNewStudent(this.state.firstName, this.state.lastName, this.state.email, this.state.gpa,this.state.campusId); //submit new items to props
    //resetting the form fields after submission
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      gpa: '',
      campusId: '',
      dirty: false
    });
  }

  render () {
    let firstName = this.state.firstName;
    let lastName = this.state.lastName;
    let email = this.state.email;
    let campuses = this.props.campuses;
    let gpa = this.props.gpa;
    let campusId = this.state.campusId;
    const dirty = this.state.dirty;
    let warning = '';

    if (!firstName && !lastName && !email ) {
      warning = 'You must enter details for a student';
    }


    return (
      <StudentForm
        handleFirstNameChange={this.handleFirstNameChange}
        handleLastNameChange={this.handleLastNameChange}
        handleEmailChange={this.handleEmailChange}
        handleCampusChange={this.handleCampusChange}
        handleSubmit={this.handleSubmit}
        firstName={firstName}
        lastName={lastName}
        email={email}
        gpa={gpa}
        campusId={campusId}
        campuses={campuses}
        warning={warning}
        formTitle="Add Student"
      />
    );
  }
}
const mapStateToProps = state => {
  return {
    campuses: state.campuses.list,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    //have two items to pass into adding a new campus: the name and the image
    addNewStudent (studentFirstName, studentLastName, studentEmail,studentGpa, studentCampus) {
      dispatch(makeNewStudent(studentFirstName, studentLastName, studentEmail,studentGpa, studentCampus));//dispatching the action to add a new campus
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewStudentContainer);
