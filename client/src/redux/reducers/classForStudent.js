const reducers = (classForStudent = [], action) => {
  switch (action.type) {
    case 'FETCH_CLASS':
      return action.payload;
    default:
      return classForStudent;
  }
}

export default reducers;