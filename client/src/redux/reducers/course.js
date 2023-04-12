const reducers = (course = [], action) => {
  switch (action.type) {
    case 'FETCH_COURSE':
      return action.payload;
    case 'FETCH_COURSES':
      return action.payload;
    case 'CREATE_COURSE':
      return [...course, action.payload];
    case 'DELETE_COURSE':
      return course.filter((course) => course.courseID !== action.payload);
    case 'UPDATE_COURSE':
      return course.map((course) => course.courseID === action.payload.courseID ? action.payload : course);
    default:
      return course;
  }
}

export default reducers;