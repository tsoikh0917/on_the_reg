const express = require('express')
const Student  = require('../controllers/studentController')

const router = express.Router()

router.get('/', Student.getAllStudent)
router.get('/:userID', Student.getStudent)
router.post('/', Student.addStudent)
router.put('/:userID', Student.updateStudent)
router.put('/delete/:userID', Student.deleteStudent)

module.exports = router