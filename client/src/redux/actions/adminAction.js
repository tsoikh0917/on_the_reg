import * as api from '../api/api'

export const getAdminByID = (id) => async (dispatch) => {
  try {
    const { data } = await api.getAdminByID(id);
    dispatch({ type: 'FETCH_ADMIN', payload: data });
  } catch (error) {
    console.log(error.message);
  }
}

export const getAdminByUsername = (id) => async (dispatch) => {
  try {
    const { data } = await api.getAdminByUsername(id);
    dispatch({ type: 'FETCH_ADMIN', payload: data });
  } catch (error) {
    console.log(error.message);
  }
}