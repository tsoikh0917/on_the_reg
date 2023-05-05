import * as api from "../api/api";

// this function is used to get all registered courses by student id
export const getRegisteredCourseById = (studentId) => async (dispatch) => {
  try {
    const { data } = await api.getRegisteredCourseById(studentId);
    dispatch({ type: "FETCH_REGISTERED_COURSES_BY_STUDENTID", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

// add class and course to registered course
export const createRegisteredCourse =
  (studentID, courseID, classID) => async (dispatch) => {
    try {
      const updateInfo = {
        studentID: studentID,
        courseID: courseID,
        classID: classID,
      };
      const { data } = await api.createRegisteredCourse(updateInfo);
      dispatch({ type: "ADD_REGISTERED_COURSES_BY_STUDENTID", payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };

// delete class and course from registered course
export const deleteRegisteredCourse =
  (courseID, studentID) => async (dispatch) => {
    try {
      const { data } = await api.deleteRegisteredCourse(courseID, studentID);
      dispatch({
        type: "DELETE_REGISTERED_COURSES_BY_STUDENTID",
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

// update class and course from registered course
export const updateRegisteredCourse =
  (id, updatedRegisteredCourse) => async (dispatch) => {
    try {
      const { data } = await api.updateRegisteredCourse(
        id,
        updatedRegisteredCourse
      );
      dispatch({
        type: "UPDATE_REGISTERED_COURSES_BY_STUDENTID",
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
