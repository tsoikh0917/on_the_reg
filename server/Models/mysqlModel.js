const mysql = require('mysql');


// create a connection variable with the required details
const con = mysql.createConnection({
  host: "csci3100-on-the-reg-db.c8jis1mqpdpb.ap-southeast-2.rds.amazonaws.com", // ip address of server running mysql
  user: "admin", // user name to your mysql database
  password: "abc123456", // corresponding password
  database: "onTheRegDB" // use the specified database
});
 
// make to connection to the database.
con.connect(function(err) {
  if (err) throw err;
  // if connection is successful
 console.log('connection successful');
});

const asyncQuery = async (sql, params) => {
  return new Promise((resolve, reject) => {
    con.query(sql, params, (err, result) => {
        if (err) {
            return reject(err)
        }
        resolve(result)
    })
  })
}

// export this module to use in other files
module.exports = { con, asyncQuery}