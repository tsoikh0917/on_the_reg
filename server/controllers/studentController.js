// con: connection to the database
const {con} = require('../Models/mysqlModel');

//view all students
const getAllStudent = async (req, res) => {
    const userID = req.param('userID');

    // ? is a placeholder for a value to be inserted into the query
    let sql = `SELECT name, username, userID, major, yearOfStudy
               FROM student
               WHERE isActive = 1`

    // first parameter: sql query
    // second parameter: array of values to be inserted into the query
    // third parameter: callback function
    con.query(sql, [userID], (err, result) => {
        if (err) throw err;
        res.status(200).send(result);
    });
}

//view specific student
const getStudent = async (req, res) => {
    const userID = req.param('userID');

    let sql = `SELECT userID, username, major, name, email, gender, yearOfStudy, emergencyContact
               FROM student
               WHERE userID = ? AND isActive = 1`

    con.query(sql, [userID], (err, result) => {
        if (err) throw err;
        res.status(200).send(result);
    });
}

//add student
const addStudent = async (req, res) => { 
    const data = req.body;

    let sql = `INSERT INTO student
               (major, username, name, email, gender, yearOfStudy, emergencyContact)
               VALUE (?, ?, ?, ?, ?, ?, ?)`

    con.query(sql, [data.major, data.username, data.name, data.email, data.gender, data.yearOfStudy, data.emergencyContact], (err, result) => {
        if (err) throw err;
        res.status(201).send(result);
    });
}

//update student   
const updateStudent = async (req, res) => {
    const userID = req.param('userID');
    const data = req.body;

    let sql = `UPDATE student SET
               major = ?, 
               name = ?, 
               gender = ?, 
               yearOfStudy = ?, 
               emergencyContact = ?,
               username = ?
               WHERE userID = ?`

    con.query(sql, [data.major, data.name, data.gender, data.yearOfStudy, data.emergencyContact, data.username, userID], (err, result) => {
        if (err) throw err;
        res.status(200).send(result);
    });
}

//delete student
const deleteStudent = async (req, res) => {
    const userID = req.param('userID');

    let sql = `UPDATE student SET
               isActive = 0
               WHERE userID = ?`

    con.query(sql, [userID], (err, result) => {
        if (err) throw err;
        res.status(200).send(result);
    });
}

// export the functions
module.exports = {
    getAllStudent,
    getStudent,
    addStudent,
    updateStudent,
    deleteStudent
}