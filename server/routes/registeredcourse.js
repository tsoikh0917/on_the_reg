const express = require('express')
const RegisteredCourse  = require('../controllers/registeredCourseController')


const router = express.Router()

router.get('/:studentID', RegisteredCourse.getRegisteredCoursesByStudent)
router.delete('/', RegisteredCourse.deleteRegisteredCourse)
router.post('/add', RegisteredCourse.addRegisteredCourse)
router.put('/edit', RegisteredCourse.updateRegisteredCourse)


module.exports = router