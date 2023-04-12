const express = require('express')
const auth = require('../controllers/authController')

const router = express.Router()

router.post('/login', auth.userLogin)
router.post('/register', auth.userRegister)
router.get('/logout', auth.userLogout)
router.get('/refresh', auth.userRefresh)

module.exports = router