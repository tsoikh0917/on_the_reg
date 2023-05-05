import * as api from "../api/api";

// this function is used to get all courses
export const getAllCourses = () => async (dispatch) => {
  try {
    // fetch all courses...
    // maybe here need to change for
    const { data } = await api.getAllCourse();
    dispatch({ type: "FETCH_COURSES", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

// this function is used to get course by id
export const getCourse = (id) => async (dispatch) => {
  try {
    const { data } = await api.getCourse(id);
    dispatch({ type: "FETCH_COURSE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

// this function is used to create course
export const createCourse = (course) => async (dispatch) => {
  try {
    // create a course...
    const { data } = await api.createCourse(course);
    dispatch({ type: "CREATE_COURSE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

// this function is used to update course
export const updateCourse = (id, updatedCourse) => async (dispatch) => {
  try {
    // update a course...
    const { data } = await api.updateCourse(id, updatedCourse);
    dispatch({ type: "UPDATE_COURSE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

// this function is used to delete course
export const deleteCourse = (courseID) => async (dispatch) => {
  try {
    // delete a course...
    await api.deleteCourse(courseID);
    dispatch({ type: "DELETE_COURSE", payload: courseID });
  } catch (error) {
    console.log(error.message);
  }
};
