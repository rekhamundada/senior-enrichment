import React, { Component } from 'react'
import CampusForm from '../components/CampusForm'
import { makeNewCampus } from '../reducers/campus-store'
import { connect } from 'react-redux'

class NewCampusContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      image: '',
      dirty: false
    }

    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleImageChange = this.handleImageChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
        // this.handleChange = this.handleChange.bind(this)
  }
    // handleChange(evt) {
    //   this.setState({ [evt.target.name]: evt.target.value, dirty:true});
    // }
  handleNameChange (evt) {
    evt.preventDefault()
    let nameValue = evt.target.value
    this.setState({
      name: nameValue,
      dirty: true
    })
  }

  handleImageChange (evt) {
    evt.preventDefault()
    let imageValue = evt.target.value
    this.setState({
      image: imageValue
    })
  }

  handleSubmit (evt) {
    evt.preventDefault()
    console.log('this is the name i want to insert for campus', this.state.name)
        // made changes addnewcampus earlier it was makenewcamus
    this.props.addNewCampus(this.state.name, this.state.image) // submit new items to props
        // resetting the form fields after submission
    this.setState({
      name: '',
      image: '',
      dirty: false
    })
  }

  render () {
    let image = this.state.image
    let name = this.state.name
    const dirty = this.state.dirty
    let warning = ''

    if (!name) {warning = 'You must enter a name'}

    return (
      <CampusForm
                // handleChange = {this.handleChange}
        handleNameChange={this.handleNameChange}
        handleImageChange={this.handleImageChange}
        handleSubmit={this.handleSubmit}
        name={name}
        image={image}
        warning={warning}
        formTitle='Add Campus'
            />
            )
          }
        }
const mapStateToProps = state => {
  return {
    state: state
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addNewCampus (campusName, campusImage) {
      console.log('define campusImage', campusImage)
      dispatch(makeNewCampus(campusName, campusImage))
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NewCampusContainer);
