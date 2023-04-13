import * as api from '../api/api'

export const getClass = (id) => async (dispatch) => {
    try {
      const { data } = await api.getClassById(id);
      dispatch({ type: 'FETCH_CLASS', payload: data });
    } catch (error) {
      console.log(error.message);
    }
  }

export const updateClass = (id, updatedClass) => async (dispatch) => {
  try {
    const { data } = await api.updateClass(id, updatedClass);
    dispatch({ type: 'UPDATE_CLASS', payload: data });
  } catch (error) {
    console.log(error.message);
  }
}