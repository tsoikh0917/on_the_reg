// con: connection to the database
const { con } = require("../Models/mysqlModel");

const getAllRegisteredCourses = async (req, res) => {};

// get registered courses by student
const getRegisteredCoursesByStudent = async (req, res) => {
  const { studentID } = req.params;

  // ? is a placeholder for a value to be inserted into the query
  let sql = `SELECT * 
             FROM user_course a, course b, class c
             WHERE a.courseID = b.courseID 
             AND a.classID = c.classID 
             AND a.userID = ?`;

  // first parameter: sql query
  // second parameter: array of values to be inserted into the query
  // third parameter: callback function
  con.query(sql, [studentID], (err, result) => {
    if (err) throw err;
    console.log(result);
    res.status(201).send(result);
  });
};

// get registered courses by course
const deleteRegisteredCourse = async (req, res) => {
  const { courseID, studentID } = req.params;

  let sql = `SELECT * 
             FROM user_course 
             WHERE courseID = ? AND userID = ?`;

  // check if the course exists
  con.query(sql, [courseID, studentID], (err, result) => {
    if (err) throw err;
    if (result.length === 0) {
      console.log("courseID: " + courseID + " userID:" + studentID);
      res.status(303).send("Course not found");
    } else {
      // delete the course
      sql = `DELETE FROM user_course 
             WHERE courseID = ? AND userID = ?`;
      con.query(sql, [courseID, studentID], (err, result) => {
        if (err) throw err;
        res.status(200).send(result);
      });
    }
  });
};

// add registered course
const addRegisteredCourse = async (req, res) => {
  const newCourse = req.body;

  let sql = `SELECT * 
             FROM user_course 
             WHERE courseID = ? AND userID = ? AND classID = ?`;

  // check if the course exists
  con.query(
    sql,
    [newCourse.studentID, newCourse.courseID, newCourse.classID],
    (err, result) => {
      if (err) throw err;
      if (result.length === 0) {
        // add the course
        sql = `INSERT INTO user_course
             (userID, courseID, classID, statusID)
             VALUES (?, ?, ?, 1)`;
        con.query(
          sql,
          [newCourse.studentID, newCourse.courseID, newCourse.classID],
          (err, result) => {
            if (err) throw err;
            res.status(201).send(result);
          }
        );
      } else {
        res.status(409).send("Course already exists");
      }
    }
  );
};

// update registered course
const updateRegisteredCourse = async (req, res) => {
  const { oldCourseID, oldStudentID, newCourseID, newStudentID } = req.body;

  let sql = `SELECT * 
             FROM user_course 
             WHERE courseID = ? AND userID = ?`;

  // check if the course exists
  con.query(sql, [oldCourseID, oldStudentID], (err, result) => {
    if (err) throw err;
    if (result.length === 0) {
      res.status(404).send("Course not found");
    } else {
      // update the course
      sql = `UPDATE user_course 
             SET courseID = ?, userID = ?
             WHERE courseID = ? AND userID = ?`;
      con.query(
        sql,
        [newCourseID, newStudentID, oldCourseID, oldStudentID],
        (err, result) => {
          if (err) throw err;
          res.status(200).send(result);
        }
      );
    }
  });
};

//export functions above for use in other files
module.exports = {
  getAllRegisteredCourses,
  getRegisteredCoursesByStudent,
  deleteRegisteredCourse,
  addRegisteredCourse,
  updateRegisteredCourse,
};
