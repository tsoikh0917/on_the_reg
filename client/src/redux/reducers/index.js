import { combineReducers } from "redux";
import auth from "./auth";
import user from "./user";
import course from "./course";
import registerCourseForAdmin from "./registerCourseForAdmin";
import registerCourseForStudent from "./registerCourseForStudent";
import classForAdmin from "./classForAdmin";
import classForStudent from "./classForStudent";
import waitlist from "./waitlist";


export default combineReducers({
  auth,
  user,
  course,
  registerCourseForAdmin,
  registerCourseForStudent,
  classForAdmin,
  classForStudent,
})