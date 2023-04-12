const reducers = (classForAdmin = [], action) => {
  switch (action.type) {
    case 'FETCH_CLASSES':
      return action.payload;
    case 'CREATE_CLASS':
      // maybe use map to find the classForAdmin and add the classForAdmin to it
      return classForAdmin.map((classForAdmin) => classForAdmin.courseID === action.payload.courseID ? action.payload : classForAdmin);
    case 'DELETE_CLASS':
      return classForAdmin.filter((classForAdmin) => classForAdmin.courseID !== action.payload.courseID);
    case 'UPDATE_CLASS':
      return classForAdmin.map((classForAdmin) => classForAdmin.courseID === action.payload.courseID ? action.payload : classForAdmin);
    default:
      return classForAdmin;
  }
}

export default reducers;