const express = require('express')
const RegisteredCourse  = require('../controllers/registeredCourseController')


const router = express.Router()

router.get('/', RegisteredCourse.getRegisteredCourses)
// router.delete('/:id', RegisteredCourse.)
// router.post('/add', RegisteredCourse.)
// router.put('/edit', RegisteredCourse.)


module.exports = router