const mongoose = require('mongoose')

const userReservationSchema = new mongoose.Schema({
    userId: {
        type: Number,
        required: true
    },
    eventDate: {
        type: Date,
        required: true
    },
    numberOfGuests: {
        type: Number,
        required: true
    }
})

const UserReservation = mongoose.model("user_reservations", userReservationSchema)

module.exports = UserReservation