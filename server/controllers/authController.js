const { con, asyncQuery} = require('../Models/mysqlModel');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userLogin = async (req, res) => {
    // "token": accessToken,
    // "role": role
    let { username, password } = req.body;
    let hash = undefined
    let role = undefined

    console.log("login start")

    // check if username and password are provided
    if (!username || !password) return res.status(400).send("Bad request")
    if (typeof password !== "string" || typeof username !== "string") return res.status(400).send("Bad request")
    
    
    try {
      // check if user exists
      let studentSql = `select * 
                        from student
                        where username LIKE ?`

      let adminSql = `select *
                      from admin
                      where username LIKE ?`

      let result = await asyncQuery(studentSql, [username])
      if (result.length != 0){
        // if student exists
        hash = result[0].saltedPassword
        role = "student"
      } else {
        result = await asyncQuery(adminSql, [username])
        // if admin and student both don't exist this username
        if (result.length == 0){
          res.status(401).send("Invalid username or password")
          return
        }

        // if admin exists
        hash = result[0].saltedPassword
        role = "admin"
      }

      console.log(hash)
      

      // check if password is correct
      let isMatch = await bcrypt.compare(password, hash)
      if (isMatch){  
        // create JWT
        const accessToken = jwt.sign(
          { "UserInfo": {
              "username": username,
              "name": result[0].name,
              "role": role
            }
          }, 
          `${process.env.ACCESS_TOKEN_SECRET}`,
          { expiresIn: '30s' }
        )
  
        const refreshToken = jwt.sign(
          { "username": username }, 
          `${process.env.REFRESH_TOKEN_SECERT}`,
          { expiresIn: '1d' }
        )
  
        // store refresh token in db
        let updateSql = role === "student" ? 
                `UPDATE student 
                 SET refreshToken = ? 
                 WHERE username LIKE ?` 
                : 
                `UPDATE admin 
                 SET refreshToken = ? 
                 WHERE username LIKE ?`
  
        // store refresh token in db
        await asyncQuery(updateSql, [refreshToken, username])

        // get user info
        let userSql = role === "student" ?
                `SELECT userID, major, name, email, gender, yearOfStudy, emergencyContact, username
                 FROM student
                 WHERE username LIKE ?`
                :
                `SELECT userID, name, username, email, gender
                 FROM admin
                 WHERE username LIKE ?`


        let UserInfo = await asyncQuery(userSql, [username])
  
        res.cookie('auth', refreshToken, { httpOnly: true, maxAge: 24*60*60*1000 }) // secure
        res.json(Object.assign(UserInfo[0], { accessToken: accessToken, role: role}))
      }else{
        res.status(401).send("Invalid username or password")
      }
    } catch (error) {
      console.log(error)
    }  
  
}

const userRegister = async (req, res) => {
  const { username, major, name, email, gender, yearOfStudy, emergencyContact, password } = req.body
  
  // check if all fields are provided
  if ( parseInt(username) == NaN || parseInt(yearOfStudy) == NaN || parseInt(emergencyContact) == NaN) {
    res.status(400).send("Bad request")
    return
  }
  
  console.log(username);
  console.log(emergencyContact);
  // check if username is 10 digits
  if (!username || username.length != 10 || emergencyContact.length != 8) return res.status(400).send("Bad request")


  let saltRounds = 10
  let saltedPassword = bcrypt.hashSync(password, saltRounds)

  console.log("saltedPassword", saltedPassword)


  let sql = `INSERT INTO student
             (username, major, name, email, gender, yearOfStudy, emergencyContact, saltedPassword, isActive)
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, 1)`

  let selectSql = `select name, username, userID, major, yearOfStudy
                   from student
                   where username LIKE ?`

  try {
    // insert into db
    await asyncQuery(sql, [username, major, name, email, gender, parseInt(yearOfStudy), emergencyContact, saltedPassword])

    // select user info
    con.query(selectSql, [username], (err, result) => {
      if (err) throw err
      res.status(201).json(result[0])
    })
  } catch (error) {
    console.log(error)
  }
}

const userLogout = async (req, res) => {
  // on client side, delete cookie
  const refreshToken = req.cookies?.auth
  const { role } = req.body
  console.log("login start")


  if (!refreshToken) return res.sendStatus(204) // no content

  // is refresh token in db?
  let sql = role === "student" ? 
            `SELECT refrestToken
              FROM student
              WHERE refrestToken = ?`
            :
            `SELECT refrestToken
             FROM admin
             WHERE refrestToken = ?`

  let deleteSQL = role === "student" ? 
                  `UPDATE student
                   SET refrestToken = ''
                   WHERE refrestToken = ?`
                  :
                  `UPDATE admin
                   SET refrestToken = ''
                   WHERE refrestToken = ?`
  try {
    // if refreshtoken not exist, delete cookie and return
    let user = await asyncQuery(sql, [refreshToken])
    if (user.length == 0){
      res.clearCookie('auth', { httpOnly: true, maxAge: 24*60*60*1000 })
      res.sendStatus(204) 
      return
    }

    // delete refresh token in db
    await asyncQuery(deleteSQL, [refreshToken])
    res.clearCookie('auth', { httpOnly: true, maxAge: 24*60*60*1000 })

    res.sendStatus(204) // no content
  } catch (error) {
    console.log(error)
  }
}

const userRefresh = async (req, res) => {
}

module.exports = {
    userLogin,
    userRegister,
    userLogout,
    userRefresh
}
