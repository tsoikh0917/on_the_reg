// should be in this format
// const auth = {
//   name: null,
//   token: null,
//   role: null,
// }

const reducers = (auth = [], action) => {
  switch (action.type) {
    case 'setCredentials':
      return action.payload;
    case 'LOGIN':
      return action.payload;
    case 'LOGOUT':
      return [];
    case 'refreshToken':
      return action.payload;
    case 'register':
      return action.payload;
    default:
      return auth;
  }
}

export default reducers;