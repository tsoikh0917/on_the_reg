// this is for admin only
// for admin to edit student's info
// for student update their own info, still use user.js!

const reducers = (student = [], action) => {
  switch (action.type) {
    case 'FETCH_STUDENT':
      return action.payload;
    case 'FETCH_STUDENTS':
      return action.payload;
    case 'CREATE_STUDENT':
      return [...student, action.payload];
    case 'DELETE_STUDENT':
      return student.filter((student) => student.userID !== action.payload);
    case 'UPDATE_STUDENT':
      return student.map((student) => student.userID === action.payload.userID ? action.payload : student);
    default:
      return student;
  }
}

export default reducers;