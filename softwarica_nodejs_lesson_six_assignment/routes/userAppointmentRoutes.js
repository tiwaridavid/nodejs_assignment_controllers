const router = require('express').Router()
const userAppointmentControllers = require('../controllers/userAppointmentControllers.js')

// Make a create user API
router.post('', 
userAppointmentControllers.createAppointment
)

module.exports = router