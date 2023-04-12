import * as api from '../api'

export const getRegisteredCourseById = (studentId) => async (dispatch) => {
  try {
    const { data } = await api.getRegisteredCourseById(studentId);
    dispatch({ type: 'FETCH_REGISTERED_COURSES_BY_STUDENTID', payload: data });
  } catch (error) {
    console.log(error.message);
  }
}

// add class and course to registered course
export const createRegisteredCourse = (studentId, courseID) => async (dispatch) => {
  try {
    const { data } = await api.createRegisteredCourse(studentId, courseID);
    dispatch({ type: 'ADD_REGISTERED_COURSES_BY_STUDENTID', payload: data });
  } catch (error) {
    console.log(error.message);
  }
}

export const updateRegisteredCourse = (id, updatedRegisteredCourse) => async (dispatch) => {
  try {
    const { data } = await api.updateRegisteredCourse(id, updatedRegisteredCourse);
    dispatch({ type: 'UPDATE_REGISTERED_COURSES_BY_STUDENTID', payload: data });
  } catch (error) {
    console.log(error.message);
  }
}