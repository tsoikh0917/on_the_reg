import * as api from '../api/api'

export const getAdmin = (id) => async (dispatch) => {
  try {
    const { data } = await api.getAdmin(id);
    console.log(data);
    dispatch({ type: 'FETCH_ADMIN', payload: data });
  } catch (error) {
    console.log(error.message);
  }
}