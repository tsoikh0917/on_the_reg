// con: connection to the database
const con = require('../Models/mysqlModel');

const getRegisteredCourses = async (req, res) => {
  const { studentID } = req.body;

  // ? is a placeholder for a value to be inserted into the query
  let sql = `SELECT * 
             FROM registered_courses
             WHERE student_id = ?`

  // first parameter: sql query
  // second parameter: array of values to be inserted into the query
  // third parameter: callback function
  con.query(sql, [studentID],  (err, result) => {
    if (err) throw err;
    res.status(201).send(result);
  });
}

const deleteRegisteredCourse = async (req, res) => {
}

const addRegisteredCourse = async (req, res) => {
}

const updateRegisteredCourse = async (req, res) => {
}

module.exports = {
  getRegisteredCourses,
  deleteRegisteredCourse,
  addRegisteredCourse,
  updateRegisteredCourse
}