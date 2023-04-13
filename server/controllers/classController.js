// con: connection to the database
const con = require('../Models/mysqlModel');

const getAllClass = async (req, res) => {
    // Get the classID from the request
    const classID = req.param('classID');

    // Prepare the SQL query
    let sql = `SELECT *
               FROM class`

    // Execute the query
    con.query(sql, [classID], (err, result) => {
        if (err) throw err;
        res.status(200).send(result);
    });
}

const getClassByCourseID = async (req, res) => {
    const { courseID } = req.params;
    let sql = `SELECT *
               FROM class
               WHERE courseID = ?`
    
    con.query(sql, [courseID], (err, result) => {
        if (err) throw err;
        res.status(200).send(result)
    })
}

const getClass = async (req, res) => {
    //Get the classID from the request params
    const classID = req.param('classID');

    //Create the SQL statement with the classID
    let sql = `SELECT *
            FROM class
            WHERE classID = ?`

    //Run the SQL query and return the result
    con.query(sql, [classID], (err, result) => {
        if (err) throw err;
        res.status(200).send(result);
    });
}

/*const getCoursebyClass = async (req, res) => {
    // Get the classID from the request
    const classID = req.param('classID');

    // Get the courseID of the class
    let sql1 = `SELECT courseID
                FROM class
                WHERE classID = ?`

    let data = con.query(sql1, [classID], (err, result) => {
        if (err) throw err;
        return result;
    });

    requested_course_id = data[0].courseID;

    // Get the course information of the class
    let sql2 = `SELECT courseID, courseName, description, faculty
                FROM course
                WHERE courseID = ?`

    con.query(sql2, [requested_course_id], (err, result) => {
        if (err) throw err;
        res.status(200).send(result);
    });
}*/



const addClass = async (req, res) => {
    const data = req.body;

    let sql = `INSERT INTO class
               (location, capacity, maxCapacity, courseID, lectureName, week, start_time, end_time)
               VALUE (?, ?, ?, ?, ?, ?, ?, ?)`
    
    con.query(sql, [data.location, data.capacity, data.maxCapacity, data.courseID, data.lectureName, data.week, data.start_time, data.end_time], (err, result) => {
        if (err) throw err;
        res.status(201).send(result);
    });
}

const updateClass = async (req, res) => {
    const classID = req.param('classID');
    const data = req.body;

    let sql = `UPDATE class SET
               location = ?, 
               capacity = ?, 
               maxCapacity = ?, 
               courseID = ?, 
               lectureName = ?,
               week = ?,
               start_time = ?,
               end_time = ?
               WHERE classID = ?`

    con.query(sql, [data.location, data.capacity, data.maxCapacity, data.courseID, data.lectureName, data.week, data.start_time, data.end_time, data.classID], (err, result) => {
        if (err) throw err;
        res.status(200).send(result);
    });
}

const deleteClass = async (req, res) => {
    const classID = req.param('classID');

    let sql = `DELETE FROM class
               WHERE classID = ?`

    con.query(sql, [classID], (err, result) => {
        if (err) throw err;
        res.status(200).send(result);
    });
}

module.exports = {
    getAllClass,
    getClass,
    getClassByCourseID,
    //getCoursebyClass,
    addClass,
    updateClass,
    deleteClass
}
