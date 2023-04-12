const reducers = (course = [], action) => {
  switch (action.type) {
    case 'FETCH_COURSES':
      return action.payload;
    case 'CREATE_COURSE':
      return [...course, action.payload];
    case 'CREATE_CLASS':
      // maybe use map to find the course and add the class to it
      return course.map((course) => course.courseID === action.payload.courseID ? action.payload : course);
    case 'DELETE_COURSE':
      return course.filter((course) => course.courseID !== action.payload.courseID);
    case 'UPDATE_COURSE':
      return course.map((course) => course.courseID === action.payload.courseID ? action.payload : course);
    default:
      return course;
  }
}

export default reducers;