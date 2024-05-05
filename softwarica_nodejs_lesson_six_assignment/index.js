// Import library
const express = require('express') 
const dotenv = require('dotenv')
const connectDB = require('./database/db')

const app = express(); // Define application

dotenv.config() // Env Configuration

connectDB(); // Database Connection

app.use(express.json()); //JSON middleware

const port = process.env.PORT || 3600;  // Port

app.listen(port, () => {
console.log(`App running at port: ${port}`)
}) // start server


app.get('/test', (req, res) => {
    res.send('Fine!')
})

app.use('/api/users', require('./routes/userRoutes')) //User Routes
app.use('/api/reservations', require('./routes/userReservationRoutes')) //User Reservation Routes
app.use('/api/book-appointment', require('./routes/userAppointmentRoutes')) //User Appointment Routes


