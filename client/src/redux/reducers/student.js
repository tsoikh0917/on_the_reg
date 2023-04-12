// this is for admin only
// for admin to edit student's info
// for student update their own info, still use user.js!

const reducers = (student = [], action) => {
  switch (action.type) {
    case 'FETCH_STUDENTS':
      return action.payload;
    case 'CREATE_STUDENT':
      return [...student, action.payload];
    case 'DELETE_STUDENT':
      return student.filter((student) => student.courseID !== action.payload.courseID);
    case 'UPDATE_STUDENT':
      return student.map((student) => student.courseID === action.payload.courseID ? action.payload : student);
    default:
      return student;
  }
}

export default reducers;