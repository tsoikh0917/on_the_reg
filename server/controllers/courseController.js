// con: connection to the database
const { con } = require('../Models/mysqlModel');

//view all courses
const ViewAllCourse = async (req, res) => {

    // ? is a placeholder for a value to be inserted into the query
    let sql = `SELECT * 
                FROM course`

    // first parameter: sql query
    // second parameter: array of values to be inserted into the query
    // third parameter: callback function
    con.query(sql, (err, result) => {
        if (err) throw err;
        res.status(200).send(result);
    });
}

//view specific course
const ViewSpecificCourse = async (req, res) => {
    const courseID = req.param('courseID');

    // ? is a placeholder for a value to be inserted into the query
    let sql = `SELECT * 
                FROM course
                where courseID = ?`

    // first parameter: sql query
    // second parameter: array of values to be inserted into the query
    // third parameter: callback function
    con.query(sql, [courseID], (err, result) => {
        if (err) throw err;
        res.status(200).send(result);
    });
}

//add course
const AddCourse = async (req, res) => { 
    const data = req.body;

    let sql = `INSERT INTO course
               (courseID, courseName, description, faculty)
               VALUES (?, ?, ?, ?)`

    con.query(sql, [data.courseID,data.courseName, data.description, data.faculty], (err, result) => {
        if (err) throw err;
        res.status(201).send(result);
    });
}

//delete course
const DeleteCourse = (req, res) => {
    const courseID = req.param('courseID');
    let message;

    let sqlClass = `DELETE FROM class
               WHERE courseID = ?`

    con.query(sqlClass, [courseID], (err, result) => {
        if (err) throw err;
        message = result;
    });

    let sql = `DELETE FROM course
               WHERE courseID = ?`

    con.query(sql, [courseID], (err, result) => {
        if (err) throw err;
        message += result;
    });

    res.status(200).send(message);
}

//edit course
const EditCourse = (req, res) => {
    const courseID = req.param('courseID');
    const data = req.body;
    let sql = `UPDATE course
               SET courseName = ?,
               description = ?,
               faculty = ?
               WHERE courseID = ?`
    con.query(sql, [data.courseName, data.description, data.faculty, courseID], (err, result) => {
    if (err) throw err;
    res.status(201).send(result);
    });

}

//view course from search bar
const ViewCourseFromSearchBar = (req, res) => {
    const data = req.param('SearchBarInput');
    let sql = `SELECT * 
                FROM course a
                where 
                courseID LIKE '%${req.param('SearchBarInput')}%'
                or courseName LIKE '%${req.param('SearchBarInput')}%'
                or faculty LIKE '%${req.param('SearchBarInput')}%'`
    con.query(sql, (err, result) => {
    if (err) throw err;
    res.status(201).send(result);
    });
}

//export functions above for use in other files
module.exports = {
    ViewAllCourse,
    ViewSpecificCourse,
    AddCourse,
    DeleteCourse,
    EditCourse,
    ViewCourseFromSearchBar
}