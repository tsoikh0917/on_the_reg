// con: connection to the database
const {con} = require('../Models/mysqlModel');

//get the waitlist by userID
const getWaitlist = async (req, res) => {
    const userID = req.param('userID');

    // ? is a placeholder for a value to be inserted into the query
    let sql = `SELECT waitlist_number, course.courseID, courseName, description
               FROM course_waitingList 
               INNER JOIN course
               ON course_waitingList.courseID = course.courseID
               WHERE course_waitingList.userID = ?`

    // first parameter: sql query
    // second parameter: array of values to be inserted into the query
    // third parameter: callback function
    con.query(sql, [userID], (err, result) => {
        if (err) throw err;
        res.status(200).send(result);
    });
}

//add to waitlist
const addWaitlist = async (req, res) => { 
    const data = req.body;

    let sql = `INSERT INTO course_waitingList
               (courseID, userID, waitlist_number) VALUE 
               (?, ?, COALESCE((SELECT max_num FROM ( 
               SELECT MAX(waitlist_number) as max_num
               FROM onTheRegDB.course_waitingList as num1
               WHERE userID = ?) as num2),0) + 1);`

    con.query(sql, [data.courseID, data.userID, data.userID], (err, result) => {
        if (err) throw err;
        res.status(201).send(result);
    });
}

//delete from waitlist
const deleteWaitlist = async (req, res) => {
    const waitlist_number = req.param('waitlist_number');
    const userID = req.param('userID');

    let sql = `DELETE FROM course_waitingList
               WHERE waitlist_number = ? AND userID = ?`

    con.query(sql, [waitlist_number, userID], (err, result) => {
        if (err) throw err;
        res.status(200).send(result);
    });
}

//export functions above for use in other files
module.exports = {
    getWaitlist,
    addWaitlist,
    deleteWaitlist
}
