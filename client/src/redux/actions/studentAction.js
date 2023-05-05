import * as api from "../api/api";

// this function is used to get all students
export const getAllStudents = () => async (dispatch) => {
  try {
    const { data } = await api.getAllStudents();
    console.log("getall: " + data);
    dispatch({ type: "FETCH_STUDENTS", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

// this function is used to get student by id
export const getStudent = (id) => async (dispatch) => {
  try {
    const { data } = await api.getStudent(id);
    console.log(data);
    dispatch({ type: "FETCH_STUDENT", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

// this function is to create student account
export const createStudent = (student) => async (dispatch) => {
  try {
    const { data } = await api.createStudent(student);
    dispatch({ type: "CREATE_STUDENT", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

// this function is to update student account
export const updateStudent = (id, updatedStudent) => async (dispatch) => {
  try {
    const { data } = await api.updateStudent(id, updatedStudent);
    dispatch({ type: "UPDATE_STUDENT", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

// this function is to delete student account
export const deleteStudent = (id) => async (dispatch) => {
  try {
    const { data } = await api.deleteStudent(id);
    console.log("delete" + data);
    dispatch({ type: "DELETE_STUDENT", payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
