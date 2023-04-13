const con = require('../Models/mysqlModel');

const userLogin = async (req, res) => {
    // "token": accessToken,
    // "role": role
    let { username, password } = req.body;

    console.log("login start")

    // check if username and password are provided
    if (!username || !password) return res.status(400).send("Bad request")

    // if ()
  
    // if (emailFormat.test(email) === false ) return res.status(400).send("Bad request")
    
    try {
      let rows = await db_all(sql, [email])
      if (rows.length == 0){
        res.status(401).send("Invalid username or password")
        return
      }
      let { password: hash } = rows[0]
      let isMatch = await bcrypt.compare(password, hash)
      if (isMatch){
        // role
        const role = rows[0].role === 8942 ? 'admin' : 'user'
  
  
        // create JWT
        const accessToken = jwt.sign(
          { "UserInfo": {
              "email": email,
              "role": role
            }
          }, 
          process.env.ACCESS_TOKEN_SECRET,
          { expiresIn: '30s' }
        )
  
        const refreshToken = jwt.sign(
          { "email": email }, 
          process.env.REFRESH_TOKEN_SECERT,
          { expiresIn: '1d' }
        )
  
        // store refresh token in db
        sql = `UPDATE 'USER'
               SET REFRESHTOKEN = ?
               WHERE EMAIL = ?`
  
        await db_run(sql, [refreshToken, email])
  
        res.cookie('auth', refreshToken, { httpOnly: true, maxAge: 24*60*60*1000 }) // secure
        res.json({ accessToken })
      }else{
        res.status(401).send("Invalid username or password")
      }
    } catch (error) {
      console.log(error)
    }  
  
}

const userRegister = async (req, res) => {
  
}

const userLogout = async (req, res) => {
    
}

const userRefresh = async (req, res) => {
}

module.exports = {
    userLogin,
    userRegister,
    userLogout,
    userRefresh
}
