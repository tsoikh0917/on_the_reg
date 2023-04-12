// format
// const user = {
//   name: null,
//   username: null,
//   gender: null,
//   email: null,
//   major: null, // for student
//   yearOfStudy: null, // for student
//   emergencyContact: null, // for student
// }

const reducers = (user = [], action) => {
  switch (action.type) {
    case 'USER_LOGIN':
      return action.payload;
    case 'USER_LOGOUT':
      return [...user, action.payload];
    case 'UPDATE_USER':
      return user.map((user) => user.courseID === action.payload.courseID ? action.payload : user);
    default:
      return user;
  }
}

export default reducers;