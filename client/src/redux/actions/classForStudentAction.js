import * as api from "../api/api";

export const getClassByCourseID = (studentId) => async (dispatch) => {
  try {
    const { data } = await api.getClassByCourseID(studentId);
    dispatch({ type: "FETCH_CLASS", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
