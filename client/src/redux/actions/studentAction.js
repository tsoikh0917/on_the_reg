import * as api from "../api/api";

export const getAllStudents = () => async (dispatch) => {
  try {
    const { data } = await api.getAllStudents();
    console.log("getall: " + data);
    dispatch({ type: "FETCH_STUDENTS", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getStudent = (id) => async (dispatch) => {
  try {
    const { data } = await api.getStudent(id);
    console.log(data);
    dispatch({ type: "FETCH_STUDENT", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createStudent = (student) => async (dispatch) => {
  try {
    const { data } = await api.createStudent(student);
    dispatch({ type: "CREATE_STUDENT", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateStudent = (id, updatedStudent) => async (dispatch) => {
  try {
    const { data } = await api.updateStudent(id, updatedStudent);
    dispatch({ type: "UPDATE_STUDENT", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteStudent = (id) => async (dispatch) => {
  try {
    const { data } = await api.deleteStudent(id);
    console.log("delete" + data);
    dispatch({ type: "DELETE_STUDENT", payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
