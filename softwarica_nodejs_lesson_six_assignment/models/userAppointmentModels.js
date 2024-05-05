const mongoose = require('mongoose')

const userAppointmentSchema = new mongoose.Schema({
    date: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    }
})

const UserAppointment = mongoose.model("user_appointments", userAppointmentSchema)

module.exports = UserAppointment