// con: connection to the database
const con = require('../Models/mysqlModel');

const getRegisteredCourses = async (req, res) => {
  let sql = 'SELECT * FROM registered_courses';
  con.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
}

module.exports = {
  getRegisteredCourses
}