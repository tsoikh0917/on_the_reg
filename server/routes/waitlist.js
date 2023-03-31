const express = require('express')
const Waitlist  = require('../controllers/waitlistController')

const router = express.Router()


router.get('/:userID', Waitlist.getWaitlist)
router.post('/', Waitlist.addWaitlist)
router.delete('/:waitlist_number/:userID', Waitlist.deleteWaitlist)


module.exports = router