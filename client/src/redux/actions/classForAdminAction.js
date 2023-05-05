import * as api from '../api/api'

// this function is used to get all classes
export const getClass = (id) => async (dispatch) => {
  try {
    const { data } = await api.getClassById(id);
    dispatch({ type: 'FETCH_CLASS', payload: data });
  } catch (error) {
    console.log(error.message);
  }
}

// this function is used to get class by course id
export const getClassByCourseID = (id) => async (dispatch) => {
  try {
    const { data } = await api.getClassByCourseID(id);
    dispatch({ type: 'FETCH_CLASSES', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

// this function is to create class
export const createClass = (newClass) => async (dispatch) => {
  try {
    const { data } = await api.createClass(newClass);
    dispatch({ type: 'CREATE_CLASS', payload: data });
  } catch (error) {
    console.log(error.message);
  }
}

// this function is to update class
export const updateClass = (id, updatedClass) => async (dispatch) => {
  try {
    const { data } = await api.updateClass(id, updatedClass);
    dispatch({ type: 'UPDATE_CLASS', payload: data });
  } catch (error) {
    console.log(error.message);
  }
}

// this function is to delete class
export const deleteClass = (id) => async (dispatch) => {
  try {
    await api.deleteClass(id);
    dispatch({ type: 'DELETE_CLASS', payload: id });
  } catch (error) {
    console.log(error.message);
  }
}