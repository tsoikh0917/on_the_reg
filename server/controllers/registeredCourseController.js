// con: connection to the database
const con = require('../Models/mysqlModel');

const getAllRegisteredCourses = async (req, res) => {
}

const getRegisteredCoursesByStudent = async (req, res) => {
  const { studentID } = req.body;

  // ? is a placeholder for a value to be inserted into the query
  let sql = `SELECT * 
             FROM user_course a, course b, class c
             WHERE a.courseID = b.courseID 
             AND a.classID = c.classID 
             AND a.userID = c.userID 
             AND a.userID = ?`

  // first parameter: sql query
  // second parameter: array of values to be inserted into the query
  // third parameter: callback function
  con.query(sql, [studentID],  (err, result) => {
    if (err) throw err
    console.log(result)
    res.status(201).send(result)
  });
}

const deleteRegisteredCourse = async (req, res) => {
  const { courseID, studentID } = req.body

  let sql = `SELECT * 
             FROM user_course 
             WHERE courseID = ? AND userID = ?`

  // check if the course exists
  con.query(sql, [courseID, studentID], (err, result) => {
    if (err) throw err
    if (result.length === 0) {
      res.status(404).send("Course not found")
    } else {
      // delete the course
      sql = `DELETE FROM user_course 
             WHERE courseID = ? AND userID = ?`
      con.query(sql, [courseID, studentID], (err, result) => {
        if (err) throw err
        res.status(200).send(result)
      })
    }
  })

}


const addRegisteredCourse = async (req, res) => {
  const newCourse = req.body

  let sql = `SELECT * 
             FROM user_course 
             WHERE courseID = ? AND userID = ? AND classID = ?`

  // check if the course exists
  con.query(sql, [newCourse.courseID, newCourse.studentID, newCourse.classID], (err, result) => {
    if (err) throw err;
    if (result.length === 0) {
      // add the course
      sql = `INSERT INTO user_course
             (userID, courseID, classID)
             VALUES (?, ?)`
      con.query(sql, [newCourse.courseID, newCourse.studentID, newCourse.classID], (err, result) => {
        if (err) throw err;
        res.status(201).send(result);
      })
    } else {
      res.status(409).send("Course already exists");
    }
  })
}

const updateRegisteredCourse = async (req, res) => {
  const { oldCourseID, oldStudentID, newCourseID, newStudentID } = req.body;

  let sql = `SELECT * 
             FROM user_course 
             WHERE courseID = ? AND userID = ?`

  // check if the course exists
  con.query(sql, [oldCourseID, oldStudentID], (err, result) => {
    if (err) throw err;
    if (result.length === 0) {
      res.status(404).send("Course not found");
    } else {
      // update the course
      sql = `UPDATE user_course 
             SET courseID = ?, userID = ?
             WHERE courseID = ? AND userID = ?`
      con.query(sql, [newCourseID, newStudentID, oldCourseID, oldStudentID], (err, result) => {
        if (err) throw err
        res.status(200).send(result)
      })
    }
  })
}

module.exports = {
  getAllRegisteredCourses,
  getRegisteredCoursesByStudent,
  deleteRegisteredCourse,
  addRegisteredCourse,
  updateRegisteredCourse
}