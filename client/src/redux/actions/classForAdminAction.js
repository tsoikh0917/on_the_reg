import * as api from '../api/api'

export const getClass = (id) => async (dispatch) => {
  try {
    const { data } = await api.getClassById(id);
    dispatch({ type: 'FETCH_CLASS', payload: data });
  } catch (error) {
    console.log(error.message);
  }
}

export const getClassByCourseID = (id) => async (dispatch) => {
  try {
    const { data } = await api.getClassByCourseID(id);
    dispatch({ type: 'FETCH_CLASSES', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createClass = (newClass) => async (dispatch) => {
  try {
    const { data } = await api.createClass(newClass);
    dispatch({ type: 'CREATE_CLASS', payload: data });
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

export const deleteClass = (id) => async (dispatch) => {
  try {
    await api.deleteClass(id);
    dispatch({ type: 'DELETE_CLASS', payload: id });
  } catch (error) {
    console.log(error.message);
  }
}