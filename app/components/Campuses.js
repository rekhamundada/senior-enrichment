import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { deleteTheCampus } from '../reducers/campus-store';

export class Campuses extends Component {

render(){
  console.log('entering campuses', this.props);
   return (
     <div>
       <h3>Campuses<span>
         <Link className="btn btn-success add-new" to="/new-campus">
           <span className="glyphicon glyphicon-plus" /> New Campus
         </Link>
       </span></h3>
       <div className="row">
         {
          this.props.campuses.map(campus => (
             <div className="col-md-3" key={ campus.id }>
               <NavLink className="thumbnail" to={`/campuses/${campus.id}`}>
                 <img className="img-circle img-responsive" src={ campus.image }/>
                 <div className="caption">
                   <h5>
                     <span>{ campus.name }</span>
                   </h5>
                 </div>
               </NavLink>
               <button className="btn btn-danger campus-delete" onClick={() => this.props.deleteOne(campus.id)}>Delete</button>
             </div>
           ))
         }
       </div>
     </div>
   );
 }
}
 const mapStateToProps = (state) => {
  console.log('campuses list', state.campuses);
  return {
    campuses: state.campuses
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteOne (campusId) {
      dispatch(deleteTheCampus(campusId));//dispatching the action to delete a campus
    }
  };
};

export default connect(mapStateToProps,
mapDispatchToProps
)(Campuses);
