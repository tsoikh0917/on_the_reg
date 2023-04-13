import * as api from '../api/api'

export const getClassByCourseID = (id) => async (dispatch) => {
  try {
    const { data } = await api.getClassByCourseID(id);
    console.log(data);
    dispatch({ type: 'FETCH_CLASS', payload: data });
  } catch (error) {
    console.log(error.message);
  }
}