import * as api from '../api/api'


// this function is used to get admin by id
export const getAdminByID = (id) => async (dispatch) => {
  try {
    const { data } = await api.getAdminByID(id);
    dispatch({ type: 'FETCH_ADMIN', payload: data });
  } catch (error) {
    console.log(error.message);
  }
}

// this function is used to get admin by username
export const getAdminByUsername = (id) => async (dispatch) => {
  try {
    const { data } = await api.getAdminByUsername(id);
    dispatch({ type: 'FETCH_ADMIN', payload: data });
  } catch (error) {
    console.log(error.message);
  }
}