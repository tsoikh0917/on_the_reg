// con: connection to the database
const con = require('../Models/mysqlModel');

const getAllClass = async (req, res) => {
    const classID = req.param('classID');

    // ? is a placeholder for a value to be inserted into the query
    let sql = `SELECT classID, location, capasity, maxCapasity, courseID, lectrueName
               FROM class
               WHERE isActive = 1`

    // first parameter: sql query
    // second parameter: array of values to be inserted into the query
    // third parameter: callback function
    con.query(sql, [classID], (err, result) => {
        if (err) throw err;
        res.status(200).send(result);
    });
}

const getClass = async (req, res) => {
    const classID = req.param('classID');

    let sql = `SELECT classID, location, capasity, maxCapasity, courseID, lectrueName
               FROM class
               WHERE classID = ? AND isActive = 1`

    con.query(sql, [classID], (err, result) => {
        if (err) throw err;
        res.status(200).send(result);
    });
}

const getCoursebyClass = async (req, res) => {
    const classID = req.param('classID');

    let sql1 = `SELECT courseID
                FROM class
                WHERE classID = ? AND isActive = 1`

    let data = con.query(sql1, [classID], (err, result) => {
        if (err) throw err;
        return result;
    });

    requested_course_id = data[0].courseID;

    let sql2 = `SELECT courseID, courseName, courseCode, courseDescription, courseCredit, courseLevel, coursePrerequisite, courseType
                FROM course
                WHERE courseID = ? AND isActive = 1`

    con.query(sql2, [requested_course_id], (err, result) => {
        if (err) throw err;
        res.status(200).send(result);
    });
}

const addClass = async (req, res) => {
    const data = req.body;

    let sql = `INSERT INTO class
               (location, capasity, maxCapasity, courseID, lectrueName)
               VALUE (?, ?, ?, ?, ?)`
    
    con.query(sql, [data.location, data.capasity, data.maxCapasity, data.courseID, data.lectrueName], (err, result) => {
        if (err) throw err;
        res.status(201).send(result);
    });
}

const updateClass = async (req, res) => {
    const classID = req.param('classID');
    const data = req.body;

    let sql = `UPDATE class SET
               location = ?, 
               capasity = ?, 
               maxCapasity = ?, 
               courseID = ?, 
               lectrueName = ?
               WHERE classID = ?`

    con.query(sql, [data.location, data.capasity, data.maxCapasity, data.courseID, data.lectrueName, classID], (err, result) => {
        if (err) throw err;
        res.status(200).send(result);
    });
}

const deleteClass = async (req, res) => {
    const classID = req.param('classID');

    let sql = `UPDATE class SET
               isActive = 0
               WHERE classID = ?`

    con.query(sql, [classID], (err, result) => {
        if (err) throw err;
        res.status(200).send(result);
    });
}

module.exports = {
    getAllClass,
    getClass,
    getCoursebyClass,
    addClass,
    updateClass,
    deleteClass
}
