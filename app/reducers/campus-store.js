import axios from 'axios';
import { createStore, applyMiddleware } from 'redux';
import loggingMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

//Action-types
const GET_ALL_CAMPUSES = 'GET_ALL_CAMPUSES';
const GET_SINGLE_CAMPUS = 'GET_SINGLE_CAMPUS';
const CREATE_NEW_CAMPUS = 'CREATE_NEW_CAMPUS';
const UPDATE_CAMPUS = 'UPDATE_CAMPUS';
const DELETE_CAMPUS = 'DELETE_CAMPUS';

//ACTION CREATORS
export function getAllCampuses(campuses) {
  console.log('action getAllCampuses');
  const action = {
    type: GET_ALL_CAMPUSES, campuses
  };
  return action;
}
export function getSingleCampus (campus) {
  console.log('action getSingleCampus');
  const action = {
    type: GET_SINGLE_CAMPUS, campus
  };
  return action;
}
export function createNewCampus(newCampus) {
  const action = {
    type: CREATE_NEW_CAMPUS, newCampus
  };
  return action;
}

export function updateCampus(updatedCampus) {
  const action = {
    type: UPDATE_CAMPUS, updatedCampus
  };
  return action;
}
export function deleteCampus(campusDeleted) {
  const action = {
    type: DELETE_CAMPUS, campusDeleted
  };
  return action;
}
//Thunk Functions
export function fetchCampuses() {
    return function thunk (dispatch) {
      return axios.get('/api/campuses')
        .then(res => res.data)
        .then(campuses => {
          const action = getAllCampuses(campuses);
          dispatch(action);
        });
    };
  }
  export function singleCampus(campusId) {
    return function thunk (dispatch) {
      return axios.get(`/api/campuses/${campusId}`)
        .then(res => res.data)
        .then(campus => {
          const action = getSingleCampus(campus);
          dispatch(action);
        })
        .catch(console.error.bind(console));
    };
  }
  export  function makeNewCampus(name, image) {
    console.log('inside makeNewCampus in store', name);
    return function thunk (dispatch) {
     return axios.post('/api/campuses', {name: name, imageUrl: image})
      .then(res =>  res.data)
      .then(createdCampus => {
        const action = createNewCampus(createdCampus);
        dispatch(action);
      })
      .catch(console.error.bind(console));
    };
  }
  export function deleteTheCampus(id) {
    return function thunk (dispatch) {
      return axios.delete(`/api/campuses/${id}`)
      .then(res => res.data)
      .then(campusDeleted => {
        const action = deleteCampus(campusDeleted);
        dispatch(action);
      })
      .catch(console.error.bind(console));
    };
  }


  export function updateTheCampus(id, campusUpdate) {
    return function thunk (dispatch) {
      return axios.put(`/api/campuses/${id}`, campusUpdate)
      .then(res => res.data)
      .then(campus => {
        const action = updateCampus(campus);
        dispatch(action);

      })
      .catch(console.error('not updated'));
    };
  }

//Reducer functions
 export default function reducer (state = [], action) {
    switch (action.type) {
      case GET_ALL_CAMPUSES:
        return action.campuses;

      case GET_SINGLE_CAMPUS:
        return [...state, action.campusId];

      case CREATE_NEW_CAMPUS:
        return [...state, action.newCampus];

      case DELETE_CAMPUS:
        return [...state, action.campusDeleted];

      case UPDATE_CAMPUS:
        return [...state, action.campusDeleted];

      default:
        return state;
    }
  }

  const campusStore = createStore(
    reducer,
    (applyMiddleware(
      thunkMiddleware,
      loggingMiddleware
    ))
  );
