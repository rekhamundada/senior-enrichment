/* combineReducers is not currently used, but eventually should be for modular code :D */
import { combineReducers } from 'redux';
 import campuses from './campus-store';
import students from './student-store';

export default combineReducers({ campuses, students });
