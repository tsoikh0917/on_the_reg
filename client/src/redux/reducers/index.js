import { combineReducers } from "redux";
import auth from "./auth";
import user from "./user";
import course from "./course";
import student from "./student";
import admin from "./admin";
import registerCourseForAdmin from "./registerCourseForAdmin";
import registerCourseForStudent from "./registerCourseForStudent";
import classForAdmin from "./classForAdmin";
import classForStudent from "./classForStudent";


export default combineReducers({
  auth,
  admin,
  user,
  course,
  student,
  registerCourseForAdmin,
  registerCourseForStudent,
  classForAdmin,
  classForStudent,
})