// this is the reducer for registerCourseForAdmin
const reducers = (registerCourseForAdmin = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL_REGISTERED_COURSES_FOR_ADMIN':
      return action.payload;
    case 'ADD_REGISTERED_COURSES_FOR_ADMIN':
      return [...registerCourseForAdmin, action.payload];
    case 'DELETE_REGISTERED_COURSES_FOR_ADMIN':
      return registerCourseForAdmin.filter((registerCourseForAdmin) => registerCourseForAdmin.courseID !== action.payload.courseID);
    default:
      return registerCourseForAdmin;
  }
}

export default reducers;