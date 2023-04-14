// should be in this format
// const auth = {
//   name: null,
//   token: null,
//   role: null,
// }

const initialState = {
  name: null,
  token: null,
  role: null,
};

const reducers = (auth = initialState, action) => {
  switch (action.type) {
    case 'GET_AUTH_STATUS':
      return action.payload;
    case 'setCredentials':
      return action.payload;
    case 'LOGIN':
      return action.payload;
    case 'LOGOUT':
      return action.payload;
    case 'refreshToken':
      return action.payload;
    case 'REGISTER':
      return action.payload;
    case 'ERROR':
      return initialState;
    default:
      return auth;
  }
}

export default reducers;