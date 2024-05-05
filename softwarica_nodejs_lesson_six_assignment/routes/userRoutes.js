const router = require('express').Router()
const userControllers = require('../controllers/userControllers.js')

// Make a create user API
router.post('', 
    userControllers.createUser
)

module.exports = router