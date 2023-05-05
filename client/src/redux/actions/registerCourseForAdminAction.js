import * as api from '../api/api'

// this function is used to get all registered courses
export const getAllRegisteredCourse = () => async (dispatch) => {
  try {
    const { data } = await api.getAllRegisteredCourse();
    dispatch({ type: "FETCH_ALL_REGISTERED_COURSES", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
