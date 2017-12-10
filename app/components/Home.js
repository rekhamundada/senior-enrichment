import React, { Component } from 'react';
// import { connect } from 'react-redux';
export default class Home extends Component {

  render() {
    console.log("enterinig home");
  return (
    <div className="background">
      <div>
        <h2>Welcome to the Indian Institute of Management Ahmedabad</h2>
      </div>
    </div>
  );
  }
}
// const mapStateToProps = (state) => {
//   console.log('entering home contaner');
//   return {
//     campuses: state.campuses.list,
//     students: state.students.list
//   };
// };

// const HomeContainer = connect(
//     mapStateToProps
// )(Home);

// export default HomeContainer;
