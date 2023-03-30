const express = require('express')
const auth = require('../controllers/authController')

const router = express.Router()

router.post('/login', auth.userLogin)
router.post('/register', auth.userRegister)
router.get('/logout', auth.userLogout)

module.exports = router