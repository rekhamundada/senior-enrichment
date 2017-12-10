import { connect } from 'react-redux';
import Home from '../components/Home';

const mapStateToProps = (state) => {
  console.log('entering home contaner');
  return {
    campuses: state.campuses.list,
    students: state.students.list
  };
};

const HomeContainer = connect(
    mapStateToProps
)(Home);

export default HomeContainer;
