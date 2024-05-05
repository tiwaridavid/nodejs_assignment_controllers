const router = require('express').Router()
const userReservationControllers = require('../controllers/userReservationControllers.js')

// Make a create user API
router.post('', 
userReservationControllers.createReservation
)

module.exports = router