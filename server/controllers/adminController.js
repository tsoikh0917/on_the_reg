const { con } = require('../Models/mysqlModel');

const getAdminByID = async (req, res) => {
    const userID = req.param('userID');

    // ? is a placeholder for a value to be inserted into the query
    let sql = `SELECT *
               FROM admin
               WHERE userID = ?`

    // first parameter: sql query
    // second parameter: array of values to be inserted into the query
    // third parameter: callback function
    con.query(sql, [userID], (err, result) => {
        if (err) throw err;
        res.status(200).send(result);
    });
}
const getAdminByUsername = async (req, res) => {
    const username = req.param('username');

    let sql = `SELECT *
               FROM admin
               WHERE username = ?`

    con.query(sql, [username], (err, result) => {
        if (err) throw err;
        res.status(200).send(result);
    });
}

module.exports = {
    getAdminByID,
    getAdminByUsername
}
