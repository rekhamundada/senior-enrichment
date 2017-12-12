import React, { Component } from 'react';
import CampusForm from '../components/CampusForm';
import { editCampus } from '../reducers/campus-store';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    campus: state.campuses.selected,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    editOne (campusName, campusImage) {
      dispatch(editCampus(campusName, campusImage));
    }
  };
};

class EditCampusContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.campus.name,
      image: props.campus.image,
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
    evt.preventDefault();
    this.props.editOne(this.state.name, this.state.image);
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
        handleNameChange= {this.handleNameChange}
        handleImageChange= {this.handleImageChange}
        handleSubmit= {this.handleSubmit}
        name={name}
        image={image}
        warning={warning}
        formTitle="Edit Campus"
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditCampusContainer);
