const express = require('express')
const Course  = require('../controllers/courseController')

const router = express.Router()


router.get('/', Course.ViewAllCourse)
router.get('/:courseID', Course.ViewSpecificCourse)
router.post('/add', Course.AddCourse)
router.delete('/delete/:courseID', Course.DeleteCourse)
router.put('/edit', Course.EditCourse)



module.exports = router