const express = require('express')
const admin = require('../controllers/adminController')

const router = express.Router()

router.get('/:userID', admin.getAdminByID)
router.get('/username/:username', admin.getAdminByUsername)

module.exports = router