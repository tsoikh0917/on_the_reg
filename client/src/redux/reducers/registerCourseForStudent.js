const reducers = (registerCourseForStudent = [], action) => {
  switch (action.type) {
    case 'FETCH_REGISTERED_COURSES_BY_STUDENTID':
      return action.payload;
    case 'ADD_REGISTERED_COURSES_BY_STUDENTID':
      return [...registerCourseForStudent, action.payload];
    case 'DELETE_REGISTERED_COURSES_BY_STUDENTID':
      return registerCourseForStudent.filter((registerCourseForStudent) => registerCourseForStudent.courseID !== action.payload.courseID);
    default:
      return registerCourseForStudent;
  }
}

export default reducers;