const reducers = (classForAdmin = [], action) => {
  switch (action.type) {
    case 'FETCH_CLASS':
      return action.payload;
    case 'FETCH_CLASSES':
      return action.payload;
    case 'CREATE_CLASS':
      // maybe use map to find the classForAdmin and add the classForAdmin to it
      return classForAdmin.map((classForAdmin) => classForAdmin.classID === action.payload.classID ? action.payload : classForAdmin);
    case 'DELETE_CLASS':
      return classForAdmin.filter((classForAdmin) => classForAdmin.classID !== action.payload.classID);
    case 'UPDATE_CLASS':
      return classForAdmin.map((classForAdmin) => classForAdmin.classID === action.payload.classID ? action.payload : classForAdmin);
    default:
      return classForAdmin;
  }
}

export default reducers;