import React, { Component } from 'react';
import CampusForm from '../components/CampusForm';
import { createNewCampus, makeNewCampus } from '../reducers/campus-store';
import { connect } from 'react-redux';

//modify this container to double as an edit container as well.? Or create a new container
//if so, I need to pass down the currently selected campus to the whole form
//get the currently selected campus from state.

class NewCampusContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      image: '',
      dirty: false
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange (evt) {
    evt.preventDefault();
    let nameValue = evt.target.value;
    this.setState({
      name: nameValue,
      dirty: true
    });
  }

  handleImageChange (evt) {
    evt.preventDefault();
    let imageValue = evt.target.value;
    this.setState({
      image: imageValue
    });
  }

  handleSubmit (evt) {
    evt.preventDefault(); //preventing bubling up
    console.log('this is the name i want to insert for campus', this.state.name);
    this.props.makeNewCampus(this.state.name, this.state.image); //submit new items to props
    //resetting the form fields after submission
    this.setState({
      name: '',
      image: '',
      dirty: false
    });
  }

  render () {
    let image = this.state.image;
    let name = this.state.name;
    const dirty = this.state.dirty;
    let warning = '';

    if (!name && dirty) {
      warning = 'You must enter a name';
    } else if (name.length > 16) {
      warning = 'The campus name is too long (limit: 16 characters)';
    }

    return (
      <CampusForm
        handleNameChange={this.handleNameChange}
        handleImageChange={this.handleImageChange}
        handleSubmit={this.handleSubmit}
        name={name}
        image={image}
        warning={warning}
        formTitle="Add Campus"
      />
    );
  }
}
const mapStateToProps = (state) => {
  return {
    state : state
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    //have two items to pass into adding a new campus: the name and the image
    makeNewCampus (campusName, campusImage) {
      console.log('define campusImage', campusImage);
      dispatch(makeNewCampus(campusName, campusImage)); //dispatching the action to add a new campus
    }
  };
};
export default connect(mapStateToProps,
  mapDispatchToProps
)(NewCampusContainer);
