const express = require('express')
const RegisteredCourse  = require('../controllers/registeredCourseController')


const router = express.Router()

router.get('/', RegisteredCourse.getRegisteredCourses)
router.delete('/:id', RegisteredCourse.deleteRegisteredCourse)
router.post('/add', RegisteredCourse.addRegisteredCourse)
router.put('/edit', RegisteredCourse.updateRegisteredCourse)


module.exports = router