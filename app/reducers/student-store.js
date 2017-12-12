import axios from 'axios';
import { createStore, applyMiddleware } from 'redux';
import loggingMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

//Action-types
const GET_ALL_STUDENTS = 'GET_ALL_STUDENTS';
const GET_STUDENT_BY_ID = 'GET_STUDENT_BY_ID';
const CREATE_NEW_STUDENT = 'CREATE_NEW_STUDENT';
const UPDATE_STUDENT = 'UPDATE_STUDENT';
const DELETE_STUDENT = 'DELETE_STUDENT';

//ACTION CREATORS
export function getAllstudents(students) {
  console.log('action getAllstudents');
  const action = {
    type: GET_ALL_STUDENTS, students
  };
  return action;
}
export function getStudentById (student) {
  console.log('action getAllstudents');
  const action = {
    type: GET_STUDENT_BY_ID, student
  };
  return action;
}
export function createNewStudent(newStudent) {
  const action = {
    type: CREATE_NEW_STUDENT, newStudent
  };
  return action;
}

export function updateStudent(student) {
  console.log('action updateStudent');
  const action = {
    type: UPDATE_STUDENT, student
  };
  return action;
}
export function deleteStudent(studentDeleted) {
  const action = {
    type: DELETE_STUDENT, studentDeleted
  };
  return action;
}
//Thunk Functions
export function fetchStudents() {
    return function thunk (dispatch) {
      return axios.get('/api/students')
        .then(res => res.data)
        .then(students => {
          const action = getAllstudents(students);
          dispatch(action);
        })
        .catch(console.error.bind(console));
    };
}
  export function singleStudent(studentId) {
    return function thunk (dispatch) {
      return axios.get(`/api/students/${studentId}`)
        .then(res => res.data)
        .then(student => {
          const action = getStudentById(student);
          dispatch(action);
        })
        .catch(console.error.bind(console))
    };
  }
  export  function makeNewStudent(firstName, lastName, email, gpa, campusId) {
    return function thunk (dispatch) {
     return axios.post('/api/students', {firstName: firstName, lastName: lastName, email: email, gpa: gpa, campusId: campusId})
      .then(res =>  res.data)
      .then(createdStud => {
        const action = createNewStudent(createdStud);
        dispatch(action);
      })
      .catch(console.error.bind(console));
    };
  }
  export function deleteTheStudent(id) {
    return function thunk (dispatch) {
      return axios.delete(`/api/students/${id}`)
      .then(res => res.data)
      .then(studentDeleted => {
        const action = deleteStudent(studentDeleted);
        dispatch(action);
      })
      .catch(console.error.bind(console));
    };
  }

  export function updateTheStudent(id, studentUpdate) {
    return function thunk (dispatch) {
      return axios.put(`/api/students/${id}`, studentUpdate)
      .then(res => res.data)
      .then(student => {
        const action = updateStudent(student);
        dispatch(action);
      })
      .catch(console.error.bind(console));
    };
  }
//Reducer functions
export default function reducer (state = [], action) {
    switch (action.type) {
      case GET_ALL_STUDENTS:
        return action.students;

      case GET_STUDENT_BY_ID:
        return [...state, action.student];

      case CREATE_NEW_STUDENT:
        return [...state, action.newStudent];

      case DELETE_STUDENT:
        return [...state, action.studentDeleted];

      case UPDATE_STUDENT:
        console.log('calling reducer function - UPDATE_STUDENT');
        return [...state, action.student];

      default: return state;
    }

  }
  const studentStore = createStore(
    reducer,
    (applyMiddleware(
      thunkMiddleware,
      loggingMiddleware
    ))
  );

