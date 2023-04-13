// this is for admin only
// for admin to edit student's info
// for student update their own info, still use user.js!

const reducers = (admin = [], action) => {
  switch (action.type) {
    case 'FETCH_ADMIN':
      return action.payload;
    default:
      return admin;
  }
}

export default reducers;