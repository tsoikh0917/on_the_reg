import * as api from '../api'

export const getAllCourses = () => async (dispatch) => {
  try {
    // fetch all courses...
    // maybe here need to change for 
    const { data } = await api.fetchAllCourses();
    dispatch({ type: 'FETCH_COURSES', payload: data });
  } catch (error) {
    console.log(error.message);
  }
}

export const createCourse = (course) => async (dispatch) => {
  try {
    // create a course...
    const { data } = await api.createCourse(course);
    dispatch({ type: 'CREATE_COURSE', payload: data });
  } catch (error) {
    console.log(error.message);
  }
}

export const updateCourse = (courseID, course) => async (dispatch) => {
  try {
    // update a course...
    const { data } = await api.updateCourse(courseID, course);
    dispatch({ type: 'UPDATE_COURSE', payload: data });
  } catch (error) {
    console.log(error.message);
  }
}

export const deleteCourse = (courseID) => async (dispatch) => {
  try {
    // delete a course...
    await api.deleteCourse(courseID);
    dispatch({ type: 'DELETE_COURSE', payload: courseID });
  } catch (error) {
    console.log(error.message);
  }
}

