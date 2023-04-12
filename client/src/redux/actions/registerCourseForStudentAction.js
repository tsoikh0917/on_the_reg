import * as api from '../api'

export const getRegisteredCourseByStudentID = (studentId) => async (dispatch) => {
  try {
    const { data } = await api.getRegisteredCourseById(studentId);
    dispatch({ type: 'FETCH_REGISTERED_COURSES_BY_STUDENTID', payload: data });
  } catch (error) {
    console.log(error.message);
  }
}

export const createRegisteredCourse = (studentId, courseID) => async (dispatch) => {
  try {
    const { data } = await api.createRegisteredCourse(studentId, courseID);
    dispatch({ type: 'ADD_REGISTERED_COURSES_BY_STUDENTID', payload: data });
  } catch (error) {
    console.log(error.message);
  }
}