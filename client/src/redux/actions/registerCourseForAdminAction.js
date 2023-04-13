import * as api from '../api/api'

export const getAllRegisteredCourse = () => async (dispatch) => {
  try {
    const { data } = await api.getAllRegisteredCourse();
    dispatch({ type: "FETCH_ALL_REGISTERED_COURSES", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
