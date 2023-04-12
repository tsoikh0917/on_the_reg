import * as api from '../api'

export const getClassByCourseID = (studentId) => async (dispatch) => {
  try {
    const { data } = await api.fetchClassByCourseID(studentId);
    dispatch({ type: 'FETCH_CLASS', payload: data });
  } catch (error) {
    console.log(error.message);
  }
}