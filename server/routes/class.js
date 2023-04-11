const express = require('express')
const Class = require('../controllers/classController')

const router = express.Router()

router.get('/', Class.getAllClass)
router.get('/:classID', Class.getClass)
router.get('/course/:classID', Class.getCoursebyClass)
router.post('/', Class.addClass)
router.put('/:classID', Class.updateClass)
router.put('/delete/:classID', Class.deleteClass)

module.exports = router